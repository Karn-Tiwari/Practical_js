// let p1 = new Promise(function(resolve, reject) {
//     resolve('Promise 1 is resolved'); });
// let p2 = new Promise(function(resolve, reject) {
//     resolve('Promise 2 is resolved'); }
//     );
// let p3 = new Promise(function(resolve, reject) {
//     resolve('Promise 3 is resolved'); }
//     );


//     Promise.race([p1,p2,p3]).then((val)=>{// ye Promise.race function teeno ka resolve hone ka wait nhi karega koi ek bhi resolve ho jata hai to wo message through kar dega

//         console.log(val)
//     }).catch((err)=>{
//         console.log(err)
//     })

let p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('Promise 1 is resolved');
    },2000)
})
let p2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('Promise 2 is resolved');
    },1000)
})

Promise.race([p1,p2]).then((val)=>{// jo sabse pehle resolve ho jayega wahi promise execute ho jayega
    console.log(val)
}).catch((err)=>{
    console.log(err)
})