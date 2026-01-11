import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const pool = new pg.Pool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  allowExitOnIdle: true
});

console.log(process.env);

//saber si esta conectada
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('Error conectando la database', err);     
    } else {    
    console.log('Database conectada:', res.rows[0]);  
    }
});
export default pool;