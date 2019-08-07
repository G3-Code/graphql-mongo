const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/BooksDB",
  {
    useNewUrlParser: true
  },
  err => {
    if (!err) {
      console.log("MongoDB connection successful");
    } else {
      console.log("Connection Error " + err);
    }
  }
);

require("./book.model");
require("./author.model");
