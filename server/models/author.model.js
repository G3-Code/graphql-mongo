const mongoose = require("mongoose");

var authorSchema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

mongoose.model("author", authorSchema);
