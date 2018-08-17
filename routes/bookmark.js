const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/Bookmark');
const bookmark = mongoose.model('bookmarks');

router.get('/', (req, res) => {
  res.send('Bookmarks');
});

module.exports = router;
