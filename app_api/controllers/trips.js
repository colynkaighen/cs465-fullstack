const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // ✅ Register model

// GET: /trips - lists all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().exec();
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving trips', error: err });
  }
};

// GET: /trips/:tripCode - get single trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving trip', error: err });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};
