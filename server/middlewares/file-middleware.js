const ApiError = require("../exceptions/api-error");
const multer = require('multer');
const path = require('path');

module.exports = function checkImageExtension(req, file, cb) {
	const fileExtension = path.extname(file.originalname).toLowerCase();
	if (['.jpg', '.png', '.gif'].includes(fileExtension)) {
		cb(null, true); // Разрешаем загрузку файла
	} else {
		cb(new ApiError('Неправильное расширение файла. Ожидается .jpg, .png или .gif', 400));
	}
}
