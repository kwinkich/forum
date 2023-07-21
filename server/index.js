require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cokkieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index.js')
const errorMidlleware = require('./middlewares/error-middleware.js');


const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use(cokkieParser());
app.use(cors({
	credentials: true,
	origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMidlleware);

const start = async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		app.listen(PORT, () => console.log(`Server stardet port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

start()
