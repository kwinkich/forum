const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const { body } = require('express-validator');


router.post('/registration',
	body('username'),
	body('password').isLength({ min: 6, max: 20 }),
	userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);


module.exports = router;

