const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
	userName: { type: String, unique: true, required: true },
	avatar: { type: String },
	password: { type: String, required: true },
	isActivated: { type: Boolean, default: false }
});

module.exports = model('User', UserSchema);
