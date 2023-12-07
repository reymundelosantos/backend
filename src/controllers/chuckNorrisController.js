const axios = require('axios');
const {logger} = require('../../lib/logger')

const getCategories = async (req, res) => {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories');
    res.json(response.data);
  } catch (error) {
    logger.error(error);
    next({
      status: error?.response?.error,
      message: error?.message,
      stack: error?.stack
    })
  }
};

const getJokes = async (req, res, next) => {
  const { category, query } = req.query;
  let apiUrl = 'https://api.chucknorris.io/jokes/random';

  if (category) {
    apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
  } else if (query) {
    apiUrl = `https://api.chucknorris.io/jokes/search?query=${query}`;
  }

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    logger.error(error);
    next({
      status: error?.response?.error,
      message: error?.message,
      stack: error?.stack
    })
  }
};

module.exports = {
  getCategories,
  getJokes,
};
