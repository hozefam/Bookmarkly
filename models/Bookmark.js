const mongoose = require('mongoose');

const schema = mongoose.Schema;

const BookmarkSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('bookmarks', BookmarkSchema);
