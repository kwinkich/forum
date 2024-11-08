require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRouter = require('./router/auth-router.js');
const errorMiddleware = require('./middlewares/error-middleware.js');
const avatarRoutes = require('./router/avatarRoutes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
	credentials: true,
	origin: process.env.CLIENT_URL,
}));
app.use(express.static('static'));
app.use(errorMiddleware);
app.use('/api', authRouter);
app.use('/uploadAvatar', avatarRoutes);

const start = async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();
