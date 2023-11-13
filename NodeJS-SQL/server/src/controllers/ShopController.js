const APIError = require('../errors/APIError');
const sequelize = require('../bd');
const { addModel, changeModel, deleteModel, getSortModel, getWithoutSortModel } = require('../models/shopModel');

class ShopController {
  async get(req, res, next) {
    try {
      let { limit = 5, page = 1, offsetRequest, sortOpt } = req.body;
      let shops;

      const offset = offsetRequest || (page - 1) * limit;

      if (!parseInt(limit) && !parseInt(limit)) {
        throw APIError.badRequest('Limit or page must be number');
      }

      if (sortOpt && /^id|name_shop|itog_sum|city|country|dateChange|datetime$/.test(sortOpt.colId)) {
        shops = await getSortModel(limit, offset, sortOpt);
      } else {
        shops = await getWithoutSortModel(limit, offset);
      }

      res.json({ body: shops, message: 'Ok' });
    } catch (error) {
      next(error);
    }
  }

  async add(req, res, next) {
    try {
      const shops = await addModel(req);
      res.json({ message: 'Ok', body: shops });
    } catch (error) {
      next(error);
    }
  }

  async change(req, res, next) {
    try {
      const { id } = req.body;
      if (!+id) {
        next(APIError.badRequest('Not found unique identificator'));
      }
      const [results] = await sequelize.query(`SELECT id FROM shops WHERE id = '${id}';`);

      if (!results) {
        next(APIError.badRequest('Shop with this identification not found'));
      }

      const shops = await changeModel(req);

      res.json({ message: 'Ok', body: shops });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      if (!+id) {
        next(APIError.badRequest('Not found unique identificator'));
      }

      const shops = await deleteModel(id);
      res.json({ message: 'Ok', body: shops });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ShopController();
