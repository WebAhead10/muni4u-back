BEGIN;
DROP TABLE IF EXISTS users ,requests;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    haweye VARCHAR(15) NOT NULL,
    fullname VARCHAR(15) NOT NULL,
    phone VARCHAR (10) NOT NULL,
    email VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    address VARCHAR (255) NOT NULL,
    pass2 VARCHAR (255) NOT NULL
); 



CREATE TABLE requests (
    id_req SERIAL PRIMARY KEY,
    id_user INTEGER REFERENCES users(id),
    fullname VARCHAR (255) NOT NULL,
    req_subject VARCHAR (255) NOT NULL,
    req_content VARCHAR (255) NOT NULL 
);



COMMIT;