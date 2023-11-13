const sequelize = require('../bd');

async function getSortModel(limit, offset, sortOpt) {
  const body = {};
  const { colId, sort } = sortOpt;
  const col = /^name_shop|city$/.test(colId) ? 's.' + colId : 'w.' + colId;

  const [, results] = await sequelize.query(`
		 SELECT w.*, s.city, s.name_shop FROM workers AS w, shops AS s
		 WHERE w.shop_id = s.id
	    ORDER BY ${col}  ${sort.includes('desc') ? 'DESC NULLS LAST' : ''}
	    LIMIT ${limit} OFFSET ${offset};
	   `);

  body.rows = results.rows;
  body.count = results.rowCount;

  return body;
}

async function getWithoutSortModel(limit, offset) {
  const body = {};

  const [, results] = await sequelize.query(` 
	  SELECT w.*, s.city, s.name_shop FROM workers AS w, shops AS s
	  WHERE w.shop_id = s.id
	  LIMIT ${limit} OFFSET ${offset};`);

  body.rows = results.rows;
  body.count = results.rowCount;

  return body;
}

async function addModel(req) {
  const { frstName, lastName, number, gainings, shopId } = req.body;
  await sequelize.query(
    `INSERT INTO workers (first_name, last_name, number, gainings, shop_id) VALUES(${frstName}, ${lastName}, ${number}, ${gainings}, ${shopId});`,
  );
}

module.exports = { addModel, getSortModel, getWithoutSortModel };
