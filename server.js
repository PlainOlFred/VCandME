const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


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

// Production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve( __dirname ,'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
