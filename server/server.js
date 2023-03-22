const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

require('dotenv').config();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(bodyParser.json({limit: '1mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "1mb", extended: true}));
app.use(bodyParser.text({ limit: '1mb' }));


app.use('/api/lists', require('./routes/listsRoute'))

mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(() => {
        app.listen(port, () => {
            console.log(`App listening on port: ${port}`)
        })
    })