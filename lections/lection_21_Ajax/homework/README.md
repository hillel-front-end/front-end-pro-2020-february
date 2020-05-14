# Изучить материал

+ https://learn.javascript.ru/ajax-nodejs
+ https://learn.javascript.ru/ajax-xmlhttprequest
+ https://habrahabr.ru/post/50147/
+ http://xiper.net/learn/also-need-to-know/how-does-a-browser-communicate-with-the-server
+ http://xiper.net/learn/also-need-to-know/get-or-post
+ http://xiper.net/learn/also-need-to-know/how-does-a-browser-http-request
+ http://xiper.net/learn/also-need-to-know/twenty-things-about-browsers-and-web/ip-addresses-and-dns

# Практика

* Создать форму с полями login, password и кнопку sign in. По нажатию на кнопку введенные данные с формы отправляются на сервер. 
* Сервер должен проверить в файле users.json существует ли такой юзер с отправленными данными(login, password).
Пример массива из файла users: 
`[{"login":"admin", "password": "admin", "id": 1}]`
* Сервер должен отправить на client id пользователя, и в запрос указать status 200. Если такого пользователя не существует то 'Not found' и status 401.
* Тренируемся дальше. Задача по id получить список товаров по юузеру. Логика работы следующая:

1) Как только вы получили id на client-е (от сервера) - отпрвить его обратно на сервер. За получением списка товаров по юзеру.

2) На сервере создать папку goods где будут файлики:
1.json, 2.json, 3.json ,...., n.json (создайте столько сколько у вас юзеров в файле users.json)

3) Воспользоваться id полученой от client для того чтоб воспользоваться им для прочтения соответсвующего файлика n.json
Например: при id = 1 - я могу создать строку такого вида
let urlToJson = 'goods/' + id + '.json'; - получу 'goods/1.json - путь к товарам юзера. Товары могут выглядеть так [{..},{..}] на ваше усмотрение из чего будут состоять информация по товару. Отправить товары на client.

4) Вывести на экрн товары юзера.
