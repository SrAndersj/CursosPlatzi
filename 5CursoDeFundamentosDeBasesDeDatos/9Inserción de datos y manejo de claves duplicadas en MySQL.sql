INSERT INTO products (name,slug)  values('pluma azul','pluma-azul');
INSERT INTO products (name,slug)  values('pluma roja','pluma-roja');
INSERT INTO products (name,slug)  values('pluma verde','pluma-verde');


-- INSERTAR TUPLA

INSERT INTO products (name,slug)  values

('pluma negra','pluma-negra'),

('pluma rosa','pluma-rosa');  


INSERT IGNORE INTO products (name,slug)  values('pluma verde','pluma-verde');
SHOW WARNIGNS;



INSERT INTO products (name,slug)  values('pluma verde','pluma-verde')
    ON DUPLICATE KEY UPDATE description='ejecutado en el duplicate  KEY';



INSERT INTO products (name,slug)  values('pluma verde','pluma-verde')
    ON DUPLICATE KEY UPDATE description= values(slug);



INSERT INTO products (name,slug)  values('pluma verde','pluma-verde')
ON DUPLICATE KEY UPDATE description= concat('HOla ', values(slug));


INSERT INTO products (name,slug)  values('pluma verde','pluma-verde')
ON DUPLICATE KEY UPDATE description= 15+15;


select concat('hola ', 'mundo');   


select rand();


-- 
ALTER TABLE products ADD COLUMN price float;

UPDATE products set price = rand() * 100;


INSERT INTO products (name,slug)  values('pluma verde','pluma-verde')
ON DUPLICATE KEY UPDATE description= price;



INSERT INTO products (name,slug)  values('pluma verde','pluma-verdesssssssssssss')
ON DUPLICATE KEY UPDATE description= price;