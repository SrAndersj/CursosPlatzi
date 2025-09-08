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