const express = require('express');
const { dbConnection } = require('./database/config');
const cors =require('cors');
//*dotenv es para utilizar variables de entorno
require('dotenv').config();


//crear el servidor de express
const app = express();

//BD

dbConnection()

//CORS
app.use(cors());

//lectura y parseo del body
//aca estamos diciendo que procese su contenido que venga en formato json
app.use(express.json());



//*RUTAS
//TODO auth // crear,login,renew

app.use('/api/auth', require('./routes/auth'));

//TODO CRUD: Once Ideal

app.use('/api/dreamTeam',require('./routes/dreamTeam'));

//TODO Read: Jugadores

app.use('/api/players',require('./routes/players'))
//TODO Read: lineups
app.use('/api/lineups',require('./routes/lineup'))

//TODO Read: balls
app.use('/api/balls',require('./routes/balls'))

//TODO Read: lineups
app.use('/api/stadiums',require('./routes/stadiums'))





//directorio publico
//el use en node es conocido como un middleware, que es una funcion que se ejecuta cuando hacen una peticion
app.use( express.static('public') 
);



//Escuchar peticiones

app.listen(process.env.PORT, () =>{ 
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})