CREATE TABLE student (
                         id SERIAL PRIMARY KEY ,
                         firstName VARCHAR(100) NOT NULL ,
                         lastName VARCHAR(100) NOT NULL ,
                         mail VARCHAR(150) UNIQUE NOT NULL

);