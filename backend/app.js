require('@babel/register');
require('dotenv').config();
const path = require('path');
const express = require('express');
const db = require('./db/models');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT ?? 4000;
config(app);

const authRoute =require('./routes/auth.route')

app.use('/api/auth', authRoute)




app
  .listen(PORT)
  .on('error', (error) => {
    console.error('Ошибка при запуске веб-сервера');
    console.error(error.message);
  })
  .on('listening', async () => {
    console.log('Веб-сервер слушает порт,', PORT);
    try {
      await db.sequelize.authenticate({ logging: false });
      console.log('БД подключена успешно');
    } catch (error) {
      console.error('Ошибка подключения БД');
      console.error(error.message);
    }
  });
