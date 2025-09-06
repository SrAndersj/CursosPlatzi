-- https://dbdiagram.io/home

-- dbml no es para ejecutar es para visualizar ,


table clients {

client_id int [pk, not null, increment, note: "esto es una nota"]
name varchar
email varchar
created_at timestamp

}



table bills {

  bill_id int [pk , increment]
  client_id int [not null,ref: > clients.client_id]

  
}

-- ir a Estructura.dbml donde esta
-- la estructura de la base de datos


-------------------------------
-- vamos a escribir lo de ejecutar en terminal ahora si

CREATE TABLE IF NOT EXISTS clients(

  client_id integer primary key auto_increment,
  name varchar(100) not null,
  email varchar(100) not null unique,
  phone_number varchar(15),
  created_at timestamp not null default current_timestamp,
  modified_at timestamp not null default current_timestamp

);


-- 
SHOW WARNINGS;



