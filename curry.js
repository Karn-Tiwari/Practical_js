 // CURRYING
 // kisi ek value ko fix karke alag alag value ko pass karke add karna ho to isko hi currying bolte hai
 function add(x){
    return function(y){
        console.log(x+y)
    }
    
 }

 let addwith2 = add(2)
 addwith2(3)
 
