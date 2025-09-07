CREATE TABLE IF NOT EXISTS bill_products (

    bill_product_id integer primary key auto_increment,
    bill_id integer not null,
    product_id integer not null,
    quantity integer not null,
    
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    
    
    foreign key (bill_id) references bills(bill_id)
    on delete cascade
    on update cascade,
    
    foreign key (product_id) references products(product_id)
    on delete cascade
    on update cascade


);
   delete from clients; 
    insert into clients(client_id,name,email )
    values (10,'ana','ana@gmail.com');


    insert into products(name,slug) values('cuaderno','slug-cuaderno');



    insert into bills(client_id , total) 
    values (10,100);

    insert into bill_products(bill_id,product_id,quantity) values(1,1,1);



-- si uso  delete from clients;  por el cascade se borra todo 


    -- relaciones suaves
    

CREATE TABLE IF NOT EXISTS bills (


  bill_id integer primary key auto_increment,
  client_id integer not null,

  total  float,
  status enum('open', 'partial', 'paid', 'closed') not null default 'open',


  
 created_at timestamp default current_timestamp,
 updated_at timestamp default current_timestamp on update current_timestamp

);




CREATE TABLE IF NOT EXISTS bill_products (

    bill_product_id integer primary key auto_increment,
    bill_id integer not null,
    product_id integer not null,
    quantity integer not null,
    
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
    
    

);


-- llaves duras y suaves depende de tu modelo de app
-- en las realaciones suaves las relaciones dependen de la aplicacion externa


   
