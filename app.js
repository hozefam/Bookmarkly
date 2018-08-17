const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

//Routes
const bookmark = require('./routes/bookmark');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to Mongoose
mongoose
  .connect('mongodb://localhost/bookmarkly-dev')
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch(err => console.log(err));

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.use('/bookmarks', bookmark);

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
