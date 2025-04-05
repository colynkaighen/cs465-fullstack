const mongoose = require('./db');
const Trip = require('./travlr');
const fs = require('fs');
const path = require('path');

// ✅ Load the trip data from the correct path
const trips = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/trips.json'), 'utf8'));

// 🧹 Delete all existing trips and then insert the seed data
Trip.deleteMany({})
  .then(() => {
    console.log('Existing trips removed.');
    return Trip.insertMany(trips); // ✅ Correct variable name
  })
  .then(() => {
    console.log('✅ Seed data added successfully.');
    mongoose.connection.close(); // 🔒 Close DB connection after seeding
  })
  .catch(err => {
    console.error('❌ Error seeding data:', err);
    mongoose.connection.close();
  });
