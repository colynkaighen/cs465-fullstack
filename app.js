const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Register partials
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Load travel routes
const travelRoutes = require('./app_server/routes/travelRoutes');
app.use('/travel', travelRoutes);

// Error handling (404 fallback)
app.use((req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app;
