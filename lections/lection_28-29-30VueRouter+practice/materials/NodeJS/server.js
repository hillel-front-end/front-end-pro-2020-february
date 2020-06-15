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
app.post('/auth', function (req, res) {
    const url = './mock-data/users.json';
    const {login = '', password = ''} = req.body;

    readFile(url, (error, data) => {
        const users = JSON.parse(data);
        const userData = users.filter((user) => user.login == login && user.password == password);
        const user = userData.length? userData[0] : false;
        const responseData = {
            success: false
        }
        res.status(200);
        console.log(user, 'user');

        if(user) {
            responseData.success = true;
            responseData.userInfo = user;
            delete responseData.userInfo.login;
            delete responseData.userInfo.password;
        }

        res.status(200);
        res.send(responseData);
    })

});


app.post('/add-user', function (req, res) {
    const url = './mock-data/users.json';
    readFile(url, function (error, data) {
        const user = req.body;
        const users = JSON.parse(data);
        user.id = users.length + 1;
        users.push(new User(user))

        writeFile(url, users,(error, data) => {
            res.send({res: 'ok'})
        })
    })
});


app.get('/get-products', function (req, res) {
    try {
        const id = req.query.id || '';
        readFile(`./mock-data/products/${id}.json`, function (error, data) {
            const products = JSON.parse(data);
            res
                .status(200)
                .send(products);
        });

    } catch (e) {
        console.log(e, 'e');
        res
            .status(500)
            .send({
                error: e
            });
    }

});

function User({login, password, gender = "Not", age = "12", id}) {
    this.login = login;
    this.password = password;
    this.gender = gender;
    this.age = age;
    this.id = id;
}

function readFile(url, callback) {
    fs.readFile(url, 'utf8', callback);
}

function writeFile(url, data, callback) {
    fs.writeFile(url, JSON.stringify(data), callback);
}



//passportJs

// front - end - gitHUb
// NodeJS - heroku

