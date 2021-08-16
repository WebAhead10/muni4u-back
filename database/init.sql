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
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users(id),
    subject VARCHAR (255) NOT NULL,
    content VARCHAR (255) NOT NULL 
);

COMMIT;