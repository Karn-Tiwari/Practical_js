// function calculate(a,b){
//     let result = a+b;
//     return result;
// }
// console.log(calculate(10,20));
// console.log(result)
// //function scope-> agar hum kis variable ko function k ander declare karte hai to uss variable ko bahar se access nhi kar sakte

function add(){
    let a = 4

    functionaddChild(){
        console.log(a+5)
    }
    addChild()
}

add()
//lexical scope -> agar hum kisi child function ko function k ander declare karte hai to uss child functin k ander k variable ko access kar sakte hai uss parent function k ander se


// CLOSURE-> aesa function jiske pass access ho apne parent function k ander k variable ka chahe function return ho chuka ho ya even function bhi khatam ho chuka ho 


function add(){
    let a = 4

    functionaddChild(){
        console.log(a+5)
    }
   return addChild()
}

let catchAdd = add()
console.log(catchAdd)