require("dotenv").config(); // load env file
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expHbs = require('express3-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import the index router
const indexRouter = require('./routes/index');

// Import the aboutService
const aboutService = require('./services/about.service');

// Import the sampleBooksService
const sampleBooksService = require('./services/samplebooks.service');

// const bookspdf = require('./public/images/Books')

const app = express();

const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Make MongoDB connection
 */
(async () => {
    await mongoose.connect('mongodb://localhost:27017/lms', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
})();

// Set up Handlebars as the view engine
app.engine('hbs', expHbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use the index router
app.use('/', indexRouter);

// Define a route handler to render the about.hbs template
app.get('/about', async (req, res, next) => {
    try {
        // Fetch any dynamic data needed for the about page from the aboutService
        const aboutData = await aboutService.getAboutData();

        // Render the about.hbs template with the fetched data
        res.render('about', { year: new Date().getFullYear(), ...aboutData });
    } catch (error) {
        next(error);
    }
});


// Define a route handler to render samplebooks.hbs
app.get('/samplebooks', async (req, res, next) => {
    try {
        // Fetch sample books and magazines data using sampleBooksService
        const books = await sampleBooksService.fetchBooks();
        const magazines = await sampleBooksService.fetchMagazines();

        // Render the samplebooks.hbs template with the fetched data
        res.render('samplebooks', { books, magazines });
    } catch (error) {
        next(error);
    }
});

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
