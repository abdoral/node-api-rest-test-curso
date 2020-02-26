module.exports = {
    test: {
        client: 'pg',
        version: '11',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'postgres',
            database: 'barriga',
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
}