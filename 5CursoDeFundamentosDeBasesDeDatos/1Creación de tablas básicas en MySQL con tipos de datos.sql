



CREATE DATABASE platzi;
USE platzi;


 

CREATE TABLE clients (

name VARCHAR(100),
email VARCHAR(100),
phone_number VARCHAR(100)
);

-- comandos de utilidad

SHOW DATABASES;

SHOW TABLES;




CREATE TABLE products (

name VARCHAR(20),
sku VARCHAR(15),
slug VARCHAR(20),
description TEXT,
price DECIMAL(10,2)
);


-- comandos de utilidad


DESCRIBE products; 


-- muestra la estructura de la tabla
SHOW CREATE TABLE products;



SELECT * FROM products;


-- eliminar tablas
DROP TABLE products;



INSERT INTO clients(name) VALUES('John Doe');
SELECT * FROM clients;

DROP TABLE clients;