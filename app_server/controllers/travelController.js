const tripsEndpoint = 'http://localhost:3000/api/trips';

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  }
};

// GET travel view using API data
const showTravelPage = async (req, res, next) => {
  try {
    const response = await fetch(tripsEndpoint, options);
    const trips = await response.json();
    res.render('travel', {
      title: 'Travlr Getaways',
      trips: trips
    });
  } catch (err) {
    console.error('Error fetching trips:', err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  showTravelPage
};
