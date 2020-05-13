/* 
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = func(){} -- вызываеися всякий раз когда изменяеться, readyState
 xhttp.readyState - cодержит состояние объекта XMLHttpRequest. Изменяется от 0 до 4:
    0: запрос не инициализирован
    1: установлено соединение с сервером
    2: запрос получен
    3: обработка запроса
    4: запрос завершен и ответ готов
   xhttp.open("GET", "req_url", true);
   xhttp.send();
*/

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//    if (xhr.readyState !== 4) return;
//    let a = JSON.parse(xhr.responseText);
//    console.log(a, 'a');
// };

// xhr.open("GET", "http://localhost:3003/user?minAge=12&maxAge=30");

// xhr.send();


function sendAjax({url, method, success}) {
   var xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
      let response = JSON.parse(xhr.responseText);

      success(response);
   };

   xhr.open(method, url);

   xhr.send();
}

const config = {
   url: "http://localhost:3003/user",
   method: "GET",
   success(data) {
      console.log('ok', data);
   }
};

sendAjax(config);