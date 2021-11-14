const axios = require('axios');

const HttpError = require('../models/http-error');

const API_KEY = process.env.MAPBOX_API_KEY;

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${API_KEY}`
  );

  const data = response.data.features[0].center;

  if (!data || response.status !== 200) {
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }

  const [lng, lat] = data;

  const coordinates = {
    lng: lng,
    lat: lat,
  };

  return coordinates;
}

module.exports = getCoordsForAddress;
