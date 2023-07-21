const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const tokenService = require('./token-service');
const userDto = require('../dltos/user-dto');
const UserDto = require('../dltos/user-dto');
const ApiError = require('../exceptions/api-error');
const userModel = require('../models/user-model');

class UserService {
	async registration(userName, password) {
		const candidateUserName = await UserModel.findOne({ userName });
		if (candidateUserName) {
			throw ApiError.BadRequest(`Пользователь с username ${userName} уже существует`);
		}
		const hashPassword = await bcrypt.hash(password, 6);
		const user = await UserModel.create({ userName, password: hashPassword });
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return { ...tokens, user: userDto };
	}

	async login(userName, password) {
		const user = await UserModel.findOne({ userName });
		if (!user) {
			throw ApiError.BadRequest('Пользователь с таким username не найден');
		}

		const isPassEquals = await bcrypt.compare(password, user.password); // Используйте user.password для сравнения пароля

		if (!isPassEquals) {
			throw ApiError.BadRequest('Пароль неверный');
		}

		const userDto = new UserDto(user); // Передайте объект пользователя (user) вместо имени пользователя (userName)
		const tokens = tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return { ...tokens, user: userDto };
	}


	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken);
		return token;
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizeError();
		}
		const userData = tokenService.validateRefreshToken(refreshToken);
		const tokenFromDb = await tokenService.findToken(refreshToken);
		if (!userData || !tokenFromDb) {
			throw ApiError.UnauthorizeError();
		}
		const user = await UserModel.findById(userData.id);
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });

		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return { ...tokens, user: userDto };
	}


	async getAllUsers() {
		const users = await UserModel.find();
		return users.map(user => user.userName);
	}

}

module.exports = new UserService();
