'use-strict';

// Imports:
import { FORECAST_API_KEY, FORECAST_API_URL } from './config.js';

// Api logic:
export const fetchForecast = async (location, days) => {
  try {
    const { data } = await axios.get(
      `${FORECAST_API_URL}?key=${FORECAST_API_KEY}&q=${location}&days=${days}`
    );
    return data;
  } catch (err) {
    throw err;
  }
};
