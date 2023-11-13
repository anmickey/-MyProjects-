const APIError = require('../errors/APIError');
const v = require('validator');

module.exports = (req, _, next) => {
  try {
    if (Array.isArray(req.body)) {
      next(APIError.badRequest('The data array is not processed'));
    } else {
      const { frstName, lastName, number, gainings, shopId } = req.body;

      if (!v.isAscii(frstName)) {
        next(APIError.badRequest('The "frst name" field is specified incorrectly'));
      }

      if (!v.isAscii(lastName)) {
        next(APIError.badRequest('The "last name"  field is specified incorrectly'));
      }

      if (!v.isAscii(number)) {
        next(APIError.badRequest('The "number"  field is specified incorrectly'));
      }

      if (!v.isAscii(gainings)) {
        next(APIError.badRequest('The "gainings"  field is specified incorrectly'));
      }

      if (!v.isAscii(shopId)) {
        next(APIError.badRequest('The "shop id" field is specified incorrectly'));
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};
