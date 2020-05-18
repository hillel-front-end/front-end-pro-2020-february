/*
    1)Async,
    2)Promise (catch) (callback hell)
    3)PromiseAll
    4)Practice
    5)async-await, generators?
*/

// ------------------- async -------------------

// console.log('1');


// setTimeout(() => {
//    console.log('hello');
// }, 1000);

// for(var i = 0; i <= 1000; i++) {
//    if (i == 100) {
//       console.log(i, 'i');
//    }

// }

// console.log('2');

// function a () {
//    b();
// }

// function b() {
//     c();
// }

// function c() {
//    console.log('c')
// }

// // a();

//  sendAjax({
//     url: "http://localhost:3005/briz",
//     method: "get",
//     data: {},
//     success(data) {
//        console.log('BRIZ REQUEST');
//     }
//  });

//  sendAjax({
//    url: "http://localhost:3005/foo",
//    method: "get",
//    data: {},
//    success(data) {
//       console.log('FOO REQUEST');
//    }
// });

// function g() {
//    console.log('GGGGGGGGGGGGGGGGG');
// }

// g();


// -------------- callback hell -----------------
// function sendAjax({url, method, success, data}) {
//    console.log(`sand request ${url}`)
//     var xhr = new XMLHttpRequest();
 
//     xhr.addEventListener('load', function({target}) {
//        if (target.status == 200) {
//           console.log(target.response, 'target.response');
//           const response = JSON.parse(target.response);
//           success(response);
//          //  console.log(response, 'response');
//        }
//     });
 
//     xhr.open(method, url);
    
 
//    //  console.log(data, 'data');
//     if (method.toLowerCase() == 'post') {
//       xhr.send(JSON.stringify(data));
//     } else {
//       xhr.send()
//     }
//  }
 
//  sendAjax({
//     url: "http://localhost:3005/auth",
//     method: "get",
//     data: {},
//     success({id = "NoTId"}) {
//        console.log(id, ' answer ---- id');

//        sendAjax({
//          url: `http://localhost:3005/getUsersById?id=${id}`, // HOMEWORK - new URL(), setParams
//          method: "get",
//          success(users) {
//             // callback hell
//             console.log('Ok --> getUsersById', users);

//             sendAjax({
//                url: `http://localhost:3005/combineUsers`, // HOMEWORK - new URL(), setParams
//                method: "post",
//                success(combineComplite) {
//                   // callback hell
//                   console.log('Ok --> combineUsers', combineComplite);
//                }
//             });
//          }
//       });
//     }
//  });


 // ------------------- PROMISE -------------------

 const promise = new Promise((resolve, reject) => {
   // resolve(); // call first callback in then()
   console.log(0);
  reject(); // call second callback in then()
 });

 promise
   .then(() => {
      console.log('1 then --- > PROMSE __ RESOLVED');
      return Promise.resolve(['asds']);
   }, () => {
      console.log('PROMSE __ REJECTED');
      return Promise.reject('from resolved');
   })

   .then((users) => {
      console.log('2 then --- > PROMSE __ RESOLVED', users);
   },
   (value) => {
      console.log('2 then --- > PROMSE __ REJECTED', value);
   });

