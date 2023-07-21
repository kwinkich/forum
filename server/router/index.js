const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const UserController = require('../controllers/user-controller');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');


router.post('/registration',
	body('username'),
	body('password').isLength({ min: 6, max: 20 }),
	userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;

