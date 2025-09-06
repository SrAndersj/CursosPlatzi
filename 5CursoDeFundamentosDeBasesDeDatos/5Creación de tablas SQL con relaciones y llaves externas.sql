CREATE TABLE IF NOT EXISTS products(

  product_id integer primary key auto_increment,
  
  name varchar(100) not null, 
  slug varchar(100) not null unique, 
  description text,
  


  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp on update current_timestamp

);


-- El slug es una versión del nombre del producto formateada para usarse en URLs.
-- Ejemplo: Si el producto es 'Zapatos Deportivos XYZ', su slug sería 'zapatos-deportivos-xyz'
-- Características:
-- - Todo en minúsculas
-- - Sin espacios (usando guiones)
-- - Sin caracteres especiales ni acentos
-- - Único para cada producto

-- double(8,2) significa que el número puede tener
-- hasta 8 dígitos en total, con 2 decimales.


CREATE TABLE IF NOT EXISTS bills (


  bill_id integer primary key auto_increment,
  client_id integer not null,

  total  float,
  status enum('open', 'partial', 'paid', 'closed') not null default 'open',


  
 created_at timestamp default current_timestamp,
 updated_at timestamp default current_timestamp on update current_timestamp,

foreign key (client_id) references clients(client_id)



);


insert into clients(client_id,name,email )
values (1,'Juan','juan@gmail.com');

insert into bills(client_id , total) 
values (1,100);



--  solventamos los errores de bills mediante un trigger

CREATE TABLE IF NOT EXISTS bills (


  bill_id integer primary key auto_increment,
  client_id integer not null,

  total  float,
  status enum('open', 'partial', 'paid', 'closed') not null default 'open',


  
 created_at timestamp default current_timestamp,
 updated_at timestamp default current_timestamp on update current_timestamp,

foreign key (client_id) references clients(client_id)
  on delete cascade
  on update cascade 


);


-- para ver los constraint 
 show create table bills 
    -> ;



insert into bills(client_id , total) 
values (1,150);

  
-- los update  gracias a cascade 

update clients 
set client_id = 32
where client_id = 1;


--  podemos ver la propagacion del cambio con 
 select * from bills;


--  mucho cuidado porque podemos borrar todo en cascada jajajaja