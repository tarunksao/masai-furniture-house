const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = mongoose.connect(process.env.DB_URL);

module.exports = {
  dbConnect,
};
