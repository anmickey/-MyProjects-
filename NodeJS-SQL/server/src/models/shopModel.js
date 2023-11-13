const sequelize = require('../bd');

async function getSortModel(limit, offset, sortOpt) {
  const body = {};
  const { colId, sort } = sortOpt;
  const col = colId.includes('itog_sum') ? colId : 's.' + colId;

  const [, results] = await sequelize.query(`
	SELECT s.*, itog_sum FROM shops AS s 
	LEFT JOIN (SELECT w.shop_id, SUM(w.gainings) AS itog_sum
				from workers AS w
				GROUP BY w.shop_id) AS w
	ON s.id = w.shop_id
	ORDER BY ${col} ${sort.includes('desc') ? 'DESC NULLS LAST' : ''}
	LIMIT ${limit} OFFSET ${offset};
	`);

  body.rows = results.rows;
  body.count = results.rowCount;

  return body;
}

async function getWithoutSortModel(limit, offset) {
  const body = {};

  const [, results] = await sequelize.query(` 
	 SELECT s.*, itog_sum  FROM shops AS s 
	 LEFT JOIN (SELECT w.shop_id, SUM(w.gainings) AS itog_sum
				 from workers AS w
				 GROUP BY w.shop_id) AS w
	 ON s.id = w.shop_id
	 LIMIT ${limit} OFFSET ${offset};`);

  body.rows = results.rows;
  body.count = results.rowCount;

  return body;
}

async function addModel(req) {
  const { name_shop, what_sells, city, country } = req.body;
  console.log(req.body);
  await sequelize.query(
    `INSERT INTO shops (name_shop, what_sells, city, country) VALUES('${name_shop}', '${what_sells}', '${city}', '${country}');`,
  );
  return await getWithoutSortModel(5, 0);
}

async function changeModel(req) {
  const { name_shop, what_sells, city, country, id } = req.body;

  await sequelize.query(
    `UPDATE shops
		 SET name_shop = '${name_shop}', city= '${city}', what_sells = '${what_sells}', country = '${country}', date_change = current_timestamp
		 WHERE id = ${id};`,
  );
  return await getWithoutSortModel(5, 0);
}

async function deleteModel(id) {
  await sequelize.query(
    `DELETE FROM workers WHERE shop_id = ${id};
		 DELETE FROM shops WHERE id = ${id};`,
  );
  return await getWithoutSortModel(5, 0);
}

module.exports = { addModel, changeModel, deleteModel, getWithoutSortModel, getSortModel };
