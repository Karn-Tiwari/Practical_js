let p1 = new Promise(function(resolve, reject) {
    resolve('Promise 1 is resolved'); });
let p2 = new Promise(function(resolve, reject) {
    resolve('Promise 2 is resolved'); }
    );
let p3 = new Promise(function(resolve, reject) {
    resolve('Promise 3 is resolved'); }
    );


    let promiseAll = Promise.all([p1, p2, p3]);// promise all me agar ek bhi promise reject hua to wo reject message de dega aur age kisi bhi promise ko resolve nhi karga kuki promiseall ko sare promise as an array me resolve chahiye tabhi wo sabko execute karega
    
    promiseAll.then((PromiseArr) => {
        console.log(PromiseArr);
    }).catch((err) => {
        console.log(err);
    })