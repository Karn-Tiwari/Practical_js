//this is browser non strict


// console.log(this);// returns an empty object
// windows obj


// function showThis() {
//     console.log(this);
// }
//windows obj


// showThis();

// let obj = {
//     name: 'John',
//     f:function(){
//         console.log(this);
//     }
// }
// obj-itself

// obj.f();

// let obj = {
//     name: 'John',
//     f:function(){
//         function g(){
//             console.log(this)
//         }
//         g();

//     }
// }// windows obj

// obj.f();


// 'use strict'
// console.log(this);

// 'use strict'
// function showThis(){
//     console.log(this);
// }
// showThis();


// 'use strict'
// let obj = {
//     name: 'John',
//     f:function(){
//         console.log(this)
//     }
// }
// obj.f();


'use strict'
let obj = {
    name: 'John',
    f:function(){
        function g(){
        console.log(this)
        }
        g();
    }
}
obj.f();