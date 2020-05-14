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


const forms = document.querySelectorAll('form');

for(let i = 0; i < forms.length; i++) {
   forms[i].addEventListener('click', function(event) {
      event.preventDefault();
      const target = event.target;
      const id = parseInt(this.id);
      const formItem = forms[i];

      if (target.tagName.toLowerCase() === 'button') {
         const requestPayload = processForm(formItem);

         sendAjax({
            url: "http://localhost:3005/",
            method: "post",
            data: requestPayload,
            success(data) {
               nextStep.call(formItem, id);
            }
         });
      }

   });
}

function processForm(form) {
   let requestData = {};

   for(let i = 0; i < form.length; i++) {
      const formElement = form[i];

      if (formElement.tagName.toLowerCase() !== 'button') {
         requestData[formElement.name] =  formElement.value;
      }
   }

   return requestData;
}

function nextStep(id) {
   let counter, isNextExist = forms[id + 1];

   if (isNextExist) {
      counter = id + 1;
   } else {
      counter = 0;
   }

      
   this.classList.remove('center');
   forms[counter].classList.add('center');
}

function sendAjax({url, method, success, data}) {
   var xhr = new XMLHttpRequest();

   xhr.addEventListener('load', function({target}) {
      if (target.status == 200) {
         const response = JSON.parse(target.response);
         success();
         console.log(response, 'response');
      }
   });

   xhr.open(method, url);
   xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

   console.log(data, 'data');

   xhr.send(JSON.stringify(data));
}


// sendAjax(config);







// function sendAjax({url, method, success}) {
//    var xhr = new XMLHttpRequest();

//    xhr.onreadystatechange = function() {
//       if (xhr.readyState !== 4) return;
      
//       let response = JSON.parse(xhr.responseText);

//       success(response);
//    };

//    xhr.open(method, url);

//    xhr.send();
// }
