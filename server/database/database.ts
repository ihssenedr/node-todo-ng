import {Pool} from 'pg'

const pool: Pool = new Pool({
  user : "postgres",
  password : "123456",
  host : "localhost",
  port : 5433,
  database : "todo"
});

export default pool
