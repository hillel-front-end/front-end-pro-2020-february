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
 (по адресу) http://localhost:3000/. 
 
*/
app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ---------------------------
/*
 // экспресс-программа(app).метод-запроса(get,post)([path], ф-я котора вызовется при обращении 
    на http://localhost:3000[path(напр. '/', '/user')]);
*/
  


//http://localhost:3000/ (GET)

app.get('/', function (req, res) { // req - обьект запроса, res -- обьект ответа
      console.log('THIS PATH - /');// Вызов обработчика на запрос с path ('/')
      res.status(404); // вернуть статус запроса 200
      res.send({content: 123}); // вернуть данные туда от куда пришел запрос
});

/*
 статусы (res.status(200) - говорят о том как совершился запрос, положиельно(получили необходимые данные) или 
 негативно(что то пошло не так).
 200 - все прошло ок
 404- что то не найдено
 (https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP)
*/

//http://localhost:3000/all-users (GET)

app.get('/all-users', function(request, responce) {   
  let data = JSON.stringify({content: 'HEllo world'});
  console.log('THIS PATH - /all-users',responce);

  responce
  .send(data);
});

const data = [
{name:"Valera - 2",  age: 10},
{name:"Valera - 2",  age: 9},
{name:"Valera - 2",  age: 30},
{name:"Valera", age: 20}, 
{name:"Valera - 2",  age: 15}, 
{name:"Valera - 2",  age: 12}, 
{name:"Valera - 3",  age: 22}];

app.get('/user', function(req, res) {

  let response = [];

  if (Object.keys(req.query).length) {
    const {minAge, maxAge} = req.query;
    response = data.filter(({age}) => age > minAge && age <= maxAge);
  } else {
    response = data;
  }
  
  res
    .send(response);
});

/*
'/user/:id' - при запросе http://localhost:3000/user/123, мы можем получить значение :id 
 как свойство обьекта req.params -> req.params.id == 123
 Если бы было '/user/:foo', то req.params.foo == 123
*/
app.get('/user/:id', function(req, res) {
  console.log(req.query, 'req.query');

  fs.readFile('data.json', 'utf-8', function(err, data) { // читает файл json по относительному адресу
          res
          .status(200)
          .send(data); // data - прочитаный json file который возвращаем как результат работы запроса
  });
});


// Получить список всех пользователей
function getAllusers(req, res) {  

    // res.status(200);
    // res.send({content: 123});
}

//GET Получить юзера по id (data) \ params, query



//http://localhost:3000/registration (post)

app.post('/registration', function (req, res) {
 const {id, login, password} = req.body; // req - обьект запроса, res -- обьект ответа
  console.log(id, login, password);
  console.log(req.body, 'req.body');
  req.body.id++;
  req.body.login += ' Hello';
  
  res.send(req.body);
});



//http://localhost:3000/registration (get)
app.get('/registration', function (req, res) {
   res.send(data);
 });
 






