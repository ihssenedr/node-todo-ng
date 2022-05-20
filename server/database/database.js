"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    password: "123456",
    host: "localhost",
    port: 5433,
    database: "todo"
});
exports.default = pool;
