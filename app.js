const express = require('express');

const app = express();

const bookmark = require('./routes/bookmark');

app.use('/bookmark', bookmark);

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});