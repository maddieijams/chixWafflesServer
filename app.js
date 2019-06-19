require('dotenv').config();
const express = require('express');
const app = express();

const sequelize = require('./db');
const bodyParser = require('body-parser');

// controllers
const breakfast = require('./controllers/breakfastcontroller')

sequelize.sync();
app.use(bodyParser.json());

// headers
app.use(require('./middleware/headers'));

// endpoints
app.use('/breakfast', breakfast)

// app.get('/', (req, res) => res.sendfile('index.html'));

app.listen(process.env.PORT,() => console.log(` ${process.env.NAME} is listening on ${process.env.PORT}`));