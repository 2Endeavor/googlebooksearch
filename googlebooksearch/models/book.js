// Since mongoose and and the database Schema are both used in this file, they must both be declared at the start of the file.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating a new constructor that will hold the information on the book requested
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// Defining the book collection
const Book = mongoose.model("Book", bookSchema);
// exporting the information to Book.js
module.exports = Book;
