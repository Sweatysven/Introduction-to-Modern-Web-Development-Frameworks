const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

// no more deprication warnings
mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect('mongodb://localhost:27017/todoapp-front-and-back')
    .then(function() {
    console.log('Database connected.')
});

// create express app
const app = express();
// tell it to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);

// files with the mustache extension will be seen as a template
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/', routes);

// get it running
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

