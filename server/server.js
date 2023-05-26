const express = require('express');

const dotenv = require('dotenv');

const __ENV = dotenv.config({path:__dirname+'/.env'});

const PORT = process.env.PORT;

const app = express();

const connectDB = require('./Config/db')

connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./Routers/goalRouter'));
app.use('/api/users', require('./Routers/userRouter'));

app.listen(PORT, ()=>{
    console.log("Listening to ", PORT);
})
