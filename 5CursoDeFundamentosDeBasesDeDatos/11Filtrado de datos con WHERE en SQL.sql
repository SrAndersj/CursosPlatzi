create database if not exists platzisql;

use platzi;
create table if not exists clients (
  client_id integer primary key auto_increment,
  name varchar(100) not null,
  email varchar(100) not null unique,
  phone_number varchar(15),
  created_at timestamp not null default CURRENT_TIMESTAMP,
  updated_at timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
);

create table if not exists products (
  `product_id` integer unsigned primary key auto_increment,
  name varchar(100) not null,
  sku varchar(20) not null,
  slug varchar(200) not null unique,
  description text,
  price float not null default 0,
  created_at timestamp not null default CURRENT_TIMESTAMP,
  updated_at timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
);

create table if not exists bills (
  bill_id integer unsigned primary key auto_increment,
  client_id integer not null,
  total float,
  status enum('open', 'paid', 'lost') not null default 'open',
  created_at timestamp not null default CURRENT_TIMESTAMP,
  updated_at timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
);


create table if not exists bill_products (
  bill_product_id integer unsigned primary key auto_increment,
  bill_id integer unsigned not null,
  product_id integer unsigned not null,
  quantity integer not null default 1,
  price float not null,
  discount integer not null default 0,
  date_added datetime,
  created_at timestamp not null default CURRENT_TIMESTAMP,
  updated_at timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
);




```bash
mysql -u root -p -D platzi < bills.sql;
mysql -u root -p -D platzi < clients.sql;

mysql -u root -p -D platzi < products.sql;

mysql -u root -p -D platzi < bill_products.sql;


```


-- 

select  * from clients limit 1;
select  * from clients limit 1\G


-- where

select column1,column2
from tabla
where
expre1 && expre2 || expre3;


select name
from clients
where rand() < 0.1;    --ejecuta el rand y si da por debajo de eso trae el registro


select name
from clients
where name like 'Mr%'; -- el like es para buscar por similitud 



select name
from clients
where name like 'Mr%III';

select name
from clients
where name like '%III'
or 
name like 'MrIV';


select name,email
from clients
where name like '%gibson%';


----

select * from products where price < 100;


select name , price
from products
where price < 100;

select name , price
from products
where price < 100-20;


select name , price
from products
where price between 20 and 60;



select * from bill_products
where discount > 0;


select * from bill_products
where date_added < '2024-09-24';




select * from bill_products
where date_added between '2024-09-24' and '2024-09-30';



select * from bill_products
where date_added between '2024-09-24' and '2024-09-30'

and product_id in(239,608);