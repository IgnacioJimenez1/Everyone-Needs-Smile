import { pool } from '../database/connection.js';

const getUser = async () => {
    try {
        const result = await pool.query('SELECT * FROM public.usuarios;')
        console.log(result.rows);
    } catch (error) {
        console.error('Error executing query:', error);
    }
};

getUser();


const getCamp = async () => {
    try {
        const result = await pool.query('SELECT id, title, description, fundinggoal, amountraised, startdate, enddate, status, userid, image FROM campana;');
        console.log(result.rows);
    } catch (error) {
        console.error('Error executing query:', error);
    }
};

getCamp();