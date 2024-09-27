const Pool = require("pg").Pool;  // Import the Pool class from the 'pg' module

// Create a new pool instance with PostgreSQL database connection details
const pool = new Pool({
    user: "postgres",           // PostgreSQL username
    password: "diamondx",       // PostgreSQL password
    host: "localhost",          // Database host, typically localhost for local development
    port: 5433,                 // Default PostgreSQL port
    database: "perntodo"        // Database name you're connecting to
});

// Export the pool to use it in other files of the application
module.exports = pool;