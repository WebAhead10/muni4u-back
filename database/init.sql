BEGIN;
DROP TABLE IF EXISTS users ,requests CASCADE;
CREATE TABLE users (
    id VARCHAR(20) PRIMARY KEY,
    fullname VARCHAR(15) NOT NULL,
    phone VARCHAR (10) NOT NULL,
    email VARCHAR (255) NOT NULL,
    address VARCHAR (255) NOT NULL,
    pass1 VARCHAR (255) NOT NULL
); 

CREATE TABLE requests(
    id SERIAL PRIMARY KEY, 
    haweye VARCHAR REFERENCES users(id),
    fullname VARCHAR (255) NOT NULL,
    sub VARCHAR (255) NOT NULL,
    content VARCHAR (255) NOT NULL 
);



COMMIT;