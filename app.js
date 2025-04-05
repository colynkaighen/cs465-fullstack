const express = require('express');
const path = require('path');
const hbs = require('hbs');

// Connect to MongoDB
require('./app_api/models/db');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Register partials
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Travel route
const travelRoutes = require('./app_server/routes/travelRoutes');
app.use('/travel', travelRoutes);

// API route
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);

// Error handling
app.use((req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app;
