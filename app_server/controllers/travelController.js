const fs = require('fs');
const path = require('path');

exports.showTravelPage = (req, res) => {
  const filePath = path.join(__dirname, '../data/trips.json');

  try {
    const trips = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.render('travel', {
      title: 'Travel Page',
      trips: trips
    });
  } catch (err) {
    console.error('Error loading trip data:', err);
    res.status(500).send('Error loading trip data');
  }
};
