const express = require('express');
const path = require('path');
const hbs = require('hbs');

// ✅ Connect to MongoDB
require('./app_api/models/db');

const app = express();

// ✅ View engine setup (Handlebars for customer-facing pages)
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// ✅ Register HBS partials
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// ✅ Middleware to parse incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Enable CORS globally (for Angular admin SPA)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Angular frontend
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

// ✅ Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Routes
const travelRoutes = require('./app_server/routes/travelRoutes'); // Customer-facing HBS
const apiRouter = require('./app_api/routes/index'); // REST API

app.use('/travel', travelRoutes);
app.use('/api', apiRouter);

// ✅ 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app;
