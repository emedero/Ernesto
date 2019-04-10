const mongoose = require('mongoose');

const URI = 'mongodb://localhost/products';

mongoose.connect(URI)
    .then(db => console.log("db is connect"))
    .then(db => console.log(db))
    .catch(err => console.log(err));

module.exports = mongoose;