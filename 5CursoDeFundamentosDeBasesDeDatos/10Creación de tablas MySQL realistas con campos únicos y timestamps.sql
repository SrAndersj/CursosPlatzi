drop table products;

create table if not exists products (
    product_id int primary key auto_increment,
    sku varchar(20) not null unique,
    name varchar(50) not null,
    slug varchar(50) not null unique,
    description text,
    
    created_at timestamp default current_timestamp,
    modified_at timestamp default current_timestamp on update current_timestamp
    
);

ALTER TABLE products ADD COLUMN price double(10,2) after slug; 



-- Insertar datos 
-- EN LUGAR DE MANDAR LOS 3000 DATOS DE UNA OCUPANDO TODA LA 
-- CPU ,MEJOR HAGO LOTESITOS  QUE ES MEJOR PARA PRODUCCION,
--  es decir pon un insert cada 100  lotesitos que se quieran 
 
--  ENOTNCES DESDE TERMINAL

```sh
 mysql -u root -p -D platzi < 10Insert_product_DATA.sql

```

select count(*) from products;