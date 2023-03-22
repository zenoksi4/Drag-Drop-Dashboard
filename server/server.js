const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')


require('dotenv').config();
const port = process.env.PORT || 8000;

app.use(cors())



app.use('/api/lists', () => {})

mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(() => {
        app.listen(port, () => {
            console.log(`App listening on port: ${port}`)
        })
    })