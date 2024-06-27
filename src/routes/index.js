import { Router } from 'express';
import { pool } from '../database/connection.js';
const router = Router();

router.get('/', (req, res) => res.render('index', { title: 'Everyone-Needs-Smiles' }));

router.get('/login', (req, res) => res.render('login', { title: 'Everyone-Needs-Smiles' }));

router.get('/cases', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM campana');
        const data = result.rows;
        client.release();
        res.render('cases', { data });
    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
        res.status(500).send('Error al obtener datos de la base de datos');
    }
});


export default router;