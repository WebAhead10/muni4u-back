BEGIN;

DROP TABLE IF EXISTS users ,requests CASCADE;

CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    phone VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    address VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL
); 

CREATE TABLE requests(
    id SERIAL PRIMARY KEY, 
    haweye VARCHAR REFERENCES users(id),
    fullname VARCHAR (255) NOT NULL,
    sub VARCHAR (255) NOT NULL,
    content VARCHAR (255) NOT NULL 
);



COMMIT;