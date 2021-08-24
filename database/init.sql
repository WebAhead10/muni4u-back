BEGIN;

DROP TABLE IF EXISTS users ,requests CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    haweya VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    phone VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    address VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    pass2 VARCHAR (255) NOT NULL
); 

CREATE TABLE requests(
    id SERIAL PRIMARY KEY, 
    haweye INTEGER REFERENCES users(id),
    fullname VARCHAR (255) NOT NULL,
    sub VARCHAR (255) NOT NULL,
    content VARCHAR (255) NOT NULL 
);



COMMIT;