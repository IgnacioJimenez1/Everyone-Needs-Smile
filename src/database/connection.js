import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: '127.0.0.1',
    port: 5432,
    database: 'DER',
    user: 'postgres',
    password: '153256553'
});

pool.on('connect', () => {
    console.log('Conectado a la base de datos');
});

pool.on('error', (err) => {
    console.error('Error en la conexión a la base de datos', err);
});

export { pool };