import express from 'express';
import bodyParser from 'body-parser'; 
import { pool } from './database/connection.js';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import indexRoutes from './routes/index.js'

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use('/', indexRoutes);

app.use(express.static(join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

//const __dirname = path.dirname(new URL(import.meta.url).pathname);

//app.set('views', path.join(__dirname, 'views'));

//app.get('/', async (req, res) => {
//    try {
      //  const query = 'SELECT * FROM public.campana';
    //    const client = await pool.connect();
  //      const result = await client.query(query);
//
        // Renderizar la vista 'index' con los datos obtenidos
  //      res.render('pagtest', { campana: result.rows });
//
//        client.release();
    //} catch (error) {
    //    console.error('Error al obtener los datos de la base de datos:', error);
  //      res.send('Error al obtener los datos de la base de datos.');
//    }
//});

//app.listen(port, () => {
//});