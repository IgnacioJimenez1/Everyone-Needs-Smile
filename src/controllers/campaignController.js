import { pool } from '../database/connection.js';

export const createCampaign = async (req, res) => {
    const { title, description, fundinggoal, startdate, enddate, userid } = req.body;

    try {
        const { title, description, fundinggoal, startdate, enddate, userid } = req.body;

        if (!title || !description || !fundinggoal || !startdate || !enddate || !userid) {
            return res.status(400).send('Todos los campos son obligatorios');
        }

        const client = await pool.connect();
        const query = `
            INSERT INTO campana (title, description, fundinggoal, amountraised, startdate, enddate, status, userid, image)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        `;
        const values = [title, description, fundinggoal, '0', startdate, enddate, 'pendiente', userid, null];
        await client.query(query, values);
        client.release();
        res.redirect('/cases');
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).send('Error al procesar la solicitud.');
    }
};
