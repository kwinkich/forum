module.exports = class UserDto {
	userName;
	id;
	isActivated;

	constructor(model) {
		if (model) {
			this.userName = model.userName;
			this.id = model._id;
			this.isActivated = model.isActivated;
		}
	}
};
