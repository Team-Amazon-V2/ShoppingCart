const { Pool } = require("pg");
const pool = new Pool({
 connectionString: process.env.DATABASE_URL,
//  ssl: {
//     rejectUnauthorized: false,
//  },
});
// // 
// const pool = 'postgres://anthonyclay@host:5432/amazon_db'

module.exports = pool;