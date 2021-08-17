BEGIN;
DROP TABLE IF EXIST users requests;
CREATE TABLE users (
    id  PRIMARY KEY,
    fullname VARCHAR(15) NOT NULL,
    phone VARCHAR (10) NOT NULL,
    email VARCHAR (255) NOT NULL,
    user_password VARCHAR (255) NOT NULL,
    home_address VARCHAR (255) NOT NULL
    
);



CREATE TABLE requests (
    id_req SERIAL PRIMARY KEY,
    id_user INTEGER REFERENCES users(id),
    fullname VARCHAR (255) NOT NULL,
    req_subject VARCHAR (255) NOT NULL,
    req_content VARCHAR (255) NOT NULL 
);



COMMIT;