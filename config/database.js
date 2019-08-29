require('dotenv').config()

module.exports = {
    development: {
        username: 'root',
        password: 'dbpass',
        database: 'puppy_adoption_service',
        host: 'localhost',
        dialect: 'mysql'
    },
    test: {
        username: process.env.TEST_DATABASE_USER,
        password: process.env.TEST_DATABASE_PASSWORD,
        database: process.env.TEST_DATABASE,
        host: 'localhost',
        dialect: 'postgres'
    },
    production: {
        username: 'database_test',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql'
    }
}