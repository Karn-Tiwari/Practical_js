// // this keyword in node with non strict mode

// console.log(this);// returns an empty object

// function showThis() {
//     console.log(this);
// }

// showThis();

// let obj = {
//     name: 'John',
//     f:function(){
//         console.log(this);
//     }
// }

// obj.f();

// let obj = {
//     name: 'John',
//     f:function(){
//         function g(){
//             console.log(this)
//         }
//         g();

//     }
// }

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