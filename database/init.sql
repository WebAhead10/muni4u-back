BEGIN;
-- DROP TABLE IF EXISTS;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    ID VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
    
);

CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users(ID),
    subject VARCHAR (255) NOT NULL,
    content VARCHAR (255) NOT NULL 
);

COMMIT;