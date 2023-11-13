CREATE DATABASE analytics_base

CREATE TABLE shops(
id SERIAL PRIMARY KEY,
name_shop VARCHAR(15) NOT NULL,
what_sells VARCHAR(15) NOT NULL,
city TEXT NOT NULL,
country TEXT NOT NULL,
dateTime DATE DEFAULT current_timestamp, 
date_change DATE DEFAULT current_timestamp
);

INSERT INTO shops (id, name_shop, what_sells, city, country) 
VALUES(1, 'MyChips', 'Snackes', 'New York', 'USA'), 
(2, 'Mr&Mrs', 'Food', 'New York', 'USA'),
(3, 'Mr&Mrs', 'Food', 'San Diego', 'USA'),
(4, 'GapStore', 'Clothes', 'San Diego', 'USA'),
(5, 'MyChips', 'Snackes', 'Sydney', 'Avstralia'),
(6, 'GapStore', 'Clothes', 'Moscow', 'Russia'),
(7, 'MyChips', 'Snackes', 'Moscow', 'Russia');


CREATE TABLE workers(
id SERIAL PRIMARY KEY,
first_name VARCHAR(15)NOT NULL,
last_name VARCHAR(15) NOT NULL,
number INT UNIQUE NOT NULL,
gainings INT DEFAULT 0,
shop_id INT REFERENCES shops(id) NOT NULL,
dateTime DATE DEFAULT current_timestamp, 
date_change DATE DEFAULT current_timestamp
);

INSERT INTO workers (first_name, last_name, number, gainings, shop_id)
 VALUES('Bill', 'Cosby', '1999999999', 25, 1),
 ('Mickey ', 'Rourke', '1999999998', 20, 1),
 ('Bill', 'Murray', '1999999997', 18, 2),
 ('Kelis ', 'Rogers', '1999999995', 15, 2),
 ('Jennifer', 'Butler', '1999999994', 30, 3),
 ('Emma ', 'Stone', '1999999993', 12, 3),
 ('Emma ', 'Murray', '1999999992', 12, 1),
 ('Mickey', 'Murray', '1999999910', 18, 4),
 ('Emma', 'Rogers', '1999999911', 12, 4),
 ('Mikhail', 'Oseevsky', '1999999811', 12, 6),
 ('Emma', 'Rogers', '1999999711', 12, 6),
 ('Jennifer ', 'Stone', '1999999912', 12, 5);


