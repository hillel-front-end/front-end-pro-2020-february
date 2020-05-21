/*
sendAjax + promise
promiseAll

generators // hw
fetch
async - await
-----------
MVC

*/

// try {
//     a
// } catch(e) {
//     console.log(e, 'e');
// }

// console.log(123);
function sendAjax({method, url, data}) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener('load', function({target}) {
            if (target.status == 200) {
                const response = JSON.parse(target.response);
                resolve(response);
            } else {
                reject();
            }
        });

        xhr.open(method, url);

        if (method.toLowerCase() == 'post') {
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send()
        }
    });
 }


//  sendAjax({
//     url: "http://localhost:3005/auth",
//     method: "get",
//     data: {}
// })
//     .then((id) => {
//     //   throw Error('123123');
//     })
//     .then((data) => {
//         console.log(data, 'data');
//     })
//     .finally(() => {
//         console.log('hello');
//     })
//     .catch((e) => {
//         console.log('error', e);
//     });


// Promise.all([
//     sendAjax({
//         url: "http://localhost:3005/auth",
//         method: "get",
//         data: {}
//     }),
//     sendAjax({
//         url: "http://localhost:3005/getUsersById",
//         method: "post",
//         data: {}
//     }),
//     sendAjax({
//         url: "http://localhost:3005/auth",
//         method: "get",
//         data: {}
//     })
// ])
// .then((data) => {
//     console.log(data, 'data');
// }, data => {
//     console.log('rejected', data);
// });
    

//  ---- fetch/ (axios) ----

// fetch("http://localhost:3005/auth")
//     .then((data) => data.json())
//     .then((data) => console.log(data, 'data'));


// ------- async await -------


async function getData() {
    const resp = await sendAjax({
        url: "http://localhost:3005/briz",
        method: "get",
        data: {}
    });

    console.log(resp, 'resp');
    const resp1 = await sendAjax({
        url: "http://localhost:3005/foo",
        method: "get",
        data: {}
    });

    console.log(resp1, 'resp -2');
} 


getData()
    .catch((e) => {
        console.log(e, 'e');
    })

