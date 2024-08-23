import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if (error) {
        console.error('El error de conexión es2: ', error);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});