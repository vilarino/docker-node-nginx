DROP TABLE IF EXISTS people;

CREATE TABLE people(
    id int not null auto_increment, 
    name varchar(255), primary key(id)
);


INSERT INTO people (name) VALUES ('Rafael');
INSERT INTO people (name) VALUES ('Pedro');
INSERT INTO people (name) VALUES ('Tiago');
