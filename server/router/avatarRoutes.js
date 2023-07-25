const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const router = express.Router();
const AuthMiddleware = require('../middlewares/auth-middleware');

// Настройки Multer для загрузки аватаров
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/avatars'); // Путь для сохранения аватаров
	},
	filename: (req, file, cb) => {
		const extension = path.extname(file.originalname);
		const avatarName = uuidv4() + extension;
		cb(null, avatarName); // Генерируем уникальное имя для аватара
	},
});

const upload = multer({ storage });

// Загрузка аватара
router.post('/avatar', AuthMiddleware, upload.single('avatar'), (req, res) => {
	if (!req.file) {
		return res.status(400).json({ message: 'Пожалуйста, выберите файл для загрузки.' });
	}

	// Здесь вы можете сохранить имя аватара для пользователя в модели
	// Например, req.user.avatar = req.file.filename;
	// Предполагается, что у вас есть система аутентификации, которая устанавливает req.user

	return res.json({ message: 'Аватар успешно загружен.' });
});

module.exports = router;
