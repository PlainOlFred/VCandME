const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config')


const app = express();

app.use(express.json())

// Data Base

const db = process.env.MONGODB_URI || config.get('mongoURI')

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('MongoDB connected'))
    .catch( err => console.log(err))

// Use Routes
app.use('/api/garments',require('./routes/api/garments'))
app.use('/api/outfits',require('./routes/api/outfits'))
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))

// Production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve( __dirname ,'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
