var express = require('express'); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require('fs');// fs -- обтект который дает возможность читать файлы(например json)
var app = express(); 
var bodyParser = require('body-parser');// 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs

//Настройки
//(https://overcoder.net/q/7302/%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-body-parser-%D1%81-express)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = 3003;

// запусть наше nodeJs приложении на порту 3002 по адресу http://localhost:3002/
/* 
 теперь мы знаем куда мы можем обращаться к нашей nodeJS программе
 чтоб получить данные.
 (по адресу) http://localhost:3003/. 
 
*/
app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ---------------------------
app.get('/auth', function (req, res) { // req - обьект запроса, res -- обьект ответа
      console.log('THIS PATH - /');// Вызов обработчика на запрос с path ('/')
      res.status(200); // вернуть статус запроса 200
      res.send({
        success: true
      }); // вернуть данные туда от куда пришел запрос
});

app.post('/add-user', function (req, res) {
    const url = './mock-data/users.json';

    fs.readFile(url, 'utf8',function (error, data) {
        const user = req.body;
        const users = JSON.parse(data);
        users.push(new User(user))

        fs.writeFile(url, JSON.stringify(users), (error, data) => {
            console.log(data);
            res
                .send({res: 'ok'})
        });
    });
});


function User({login, password, gender = "Not", age = "12"}) {
    this.login = login;
    this.password = password;
    this.gender = gender;
    this.age = age;
}






