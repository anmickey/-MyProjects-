const APIError = require('../errors/APIError');
const v = require('validator');

module.exports = (req, _, next) => {
  try {
    if (Array.isArray(req.body)) {
      next(APIError.badRequest('The data array is not processed'));
    } else {
      const { name_shop, what_sells, city, country } = req.body;

      if (!v.isAscii(name_shop)) {
        next(APIError.badRequest('The "name" field is specified incorrectly'));
      }

      if (!v.isAscii(what_sells)) {
        next(APIError.badRequest('The "what sells" field is specified incorrectly'));
      }

      if (!v.isAscii(city)) {
        next(APIError.badRequest('The "city" field is specified incorrectly'));
      }

      if (!v.isAscii(country)) {
        next(APIError.badRequest('The "country" field is specified incorrectly'));
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};
