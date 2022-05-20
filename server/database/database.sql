CREATE TABLE todos (
    _id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    state  VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);

SELECT * FROM todos;

