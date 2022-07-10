// const fs = require('fs')

// console.log("before")

// fs.readFile('f1.txt',cb)
//     function cb(err,data){
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log('content ' + data)
//         }
//     }


// console.log("after")


// //isme parallel execution hoga random kisi ka bhi 
// let fs = require('fs')
// console.log('before')

// fs.readFile('f1.txt',cb);
// fs.readFile('f2.txt',cb1);
// fs.readFile('f3.txt',cb2);

// function cb(err,content){
//     console.log('content '+ content);
// }
// function cb1(err,content){
//     console.log('content '+ content);
// }
// function cb2(err,content){
//     console.log('content '+ content);
// }

// console.log('after')


// Uper wale random execution code ko serially execute karwane k liye hum kuch aesa karenge ki ek ander ek file rakhenge


let fs = require('fs')
console.log('before')

fs.readFile('f1.txt',cb);



function cb(err,content){
    console.log('content '+ content);
    fs.readFile('f2.txt',cb1);
    function cb1(err,content){
        console.log('content '+ content);
        fs.readFile('f3.txt',cb2);
        function cb2(err,content){
            console.log('content '+ content);
        }
        
    }
}


console.log('after')