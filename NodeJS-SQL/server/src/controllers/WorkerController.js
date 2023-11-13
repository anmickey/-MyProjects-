const { getWithoutSortModel, getSortModel } = require('../models/workerModel');

class WorkerController {
  async get(req, res, next) {
    try {
      const { limit = 5, page = 1, offsetRequest, sortOpt } = req.body;
      let shops;

      const offset = offsetRequest || (page - 1) * limit;

      if (!parseInt(limit) && !parseInt(limit)) {
        throw APIError.badRequest('Limit or page must be number');
      }

      if (sortOpt && /^id|first_name|last_name|number|gainings|dateChange|datetime|name|city$/.test(sortOpt?.colId)) {
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
      await addModel(req);
      res.json({ message: 'Ok' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new WorkerController();
