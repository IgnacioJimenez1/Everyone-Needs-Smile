import { pool } from '../database/connection.js';
import fs from 'fs';

async function guardarImagenEnBD(idCampana, rutaImagen) {
    try {
        const imageData = await fs.promises.readFile(rutaImagen);

        const query = 'UPDATE public.campana SET image = $1 WHERE id = $2';
        const values = [imageData, idCampana];

        const client = await pool.connect();
        const result = await client.query(query, values);

        console.log(`Imagen guardada en la base de datos para la campaña con id ${idCampana}`);
        client.release();
    } catch (error) {
        console.error('Error al guardar la imagen en la base de datos:', error);
    }
}


guardarImagenEnBD(4, './public/images/img4.png');
