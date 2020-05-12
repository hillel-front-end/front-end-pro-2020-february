# Изучить материал
* https://expressjs.com/ru/starter/hello-world.html
* https://expressjs.com/ru/starter/basic-routing.html
* https://metanit.com/web/nodejs/2.4.php
* https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824 (читаем в первую очередь для выполнения ДЗ)

# Практика

1) Смотреть файл я там написал вам шпоргалки server.js

2.1) Создать новый файл server-app.js, в новом каталоге hillel-app, скопировать туда общие настройки для nodeJs-express приложения.<br> 

2.2) Создать по адресу '/set-user-info' обработчик POST запроса с телом запроса login, password, secretKey, записать программно, в файл `users.json`.

* Например при запросе c телом:
`{
    login: 'Valera',
    password: '123',
    secretKey: '@gh5'
}`

в файле(`users.json`) в массие должен добавиться новый обьект:
`[{
    login: 'Valera',
    password: '123',
    secretKey: '@gh5'
}]`
*  ecли такой пользователь с таким secretKey уже существует, вернуть сообщение, `Пользователь уже существует` и status равный 301.
  Если нету, то добавить и вернуть сообщение 'ok' и статус запроса 200

P.S.: Если будут вопросы пишите, а они должны быть.
