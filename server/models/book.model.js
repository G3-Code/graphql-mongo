const mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  genre: {
    type: String
  },
  authorId: {
    type: String
  }
});

mongoose.model("book", bookSchema);
