

CREATE TABLE test (

    test_id integer primary key auto_increment,
    name varchar(100) not null,
    qty integer,
    created_at timestamp  not null default current_timestamp
    

);


ALTER TABLE test add column price float;
ALTER TABLE test drop column price;

ALTER TABLE test add column price float first;
ALTER TABLE test add column price float after qty;

ALTER TABLE test modify column price decimal(10,3) not null;

-- tener encuenta que el dato historico en la base de datos 
-- puede tener error si no es un consistente 


-- alias de decimal
numeric
decimal
fixed
decimal(m,p)


ALTER TABLE  test rename  column price to price2;

ALTER TABLE test rename to test2;
