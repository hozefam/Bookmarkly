const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//Routes
const bookmark = require('./routes/bookmark');

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.use('/bookmark', bookmark);

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
