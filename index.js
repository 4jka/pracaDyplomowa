const express = require('express');


const api = require('./routes/api');
const auth = require('./routes/auth');
var cors = require('cors');

const app = express();

app.use(cors());

//Подключение модуля что бы парсить ЮРЛ и ДЖЕЙСОН
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));

const passport = require('passport');
var session = require('express-session');

app.use(session({
  secret: 's3cr3t',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//Подключение папки для работы сервера
app.use(express.static('public'));

app.use('/api', api);
app.use('/auth', auth);

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/" + "main.html");
})


app.get('/reg', function (req, res) {
   res.sendFile(__dirname + "/public/" + "registration.html")
});

  
// Start the server
var server = app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port
    console.log('HOST: ', host);
    console.log('PORT: ', port);
    console.log("Example app listening at http://%s:%s", host, port);
});