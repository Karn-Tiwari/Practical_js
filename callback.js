//Synchronous javascript-> pehle javascipt single thread pe chalti thi line by line execution hota tha aur kabhi agar beech me interrept ata tha to wo program wahi rukk jata tha aur time lagta tha execution me 
//Asynchronous javascript -> Iseliye Asynchronous javascript ko introduce kiya gaya
// Callbacks -> promises -> async-await

function greet(personName,age,callback,callback2){// callback ko as a parameter or argument kisi function me pass kar sakte hai
    let msg = "hello" + personName// pehle greet function ki execution hui uske baad maine kaha ki tum callback function ko invoke kar do
    let ageOfPerson = age
    callback(msg)
    callback2(ageOfPerson)
}


function logGreeting(greeting){
console.log(greeting)
}

function showAge(age){
    console.log(age)
}
greet("Steve",25,logGreeting,showAge)// yaha pe log greeting ko as a callback function pass kar sakte ahi
