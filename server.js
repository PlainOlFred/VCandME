const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json())

// Data Base

const db = require('./database/db').mongoURI

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch( err => console.log(err))

// Use Routes
app.use('/api/garments',require('./routes/api/garments'))

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
