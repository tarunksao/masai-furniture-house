const mongoose = require('mongoose');

const dbConnect = mongoose.connect(process.env.DB_URL);

module.exports = {
    dbConnect
};
