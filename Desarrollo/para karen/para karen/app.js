const express = require('express'),
path = require('path'),
morgan = require('morgan'),
mysql = require('mysql'),
myConnection = require('express-myconnection');

const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

//seteamos el motor de plantillas
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
host: 'localhost',
user: 'root',
password: '123456',
port: 3306,
database: 'cemsa_1000'
}, 'single'));


/*
// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
host: 'localhost',
user: 'id17704608_root',
password: 'proyecto2021*5K4',
port: 3306,
database: 'id17704608_cemsa_1000'
}, 'single'));*/





// static files
app.use(express.static(path.join(__dirname, 'public')));

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables de entorno
dotenv.config({path: './env/.env'})

//para poder trabajar con las cookies
app.use(cookieParser())

//llamar al router
app.use('/', require('./routes/home'))
app.use(require('./routes/router'))
app.use(require('./routes/menu'))
app.use('/persona',require('./routes/persona'));
app.use('/servicio', require('./routes/servicio'));
app.use('/central', require('./routes/central'));
app.use('/servicioCliente', require('./routes/servicioCliente'));
app.use('/consultarCliente', require('./routes/consultarCliente'));
app.use('/consultarServicioCliente', require('./routes/consultarServicioCliente'));

//app.use(require('./routes/domicilioCuenta'));


//app.use('/servicio_editar', require('./routes/servicio'));




//Para eliminar la cache 
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});


// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
    });