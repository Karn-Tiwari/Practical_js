// // baar baar function ko likhne se acha hai ek object me likho aur usko har object k liye use kar lo isko function borrowing kahte hai 
// //FUNCTION BORROWING
// let person1 = {
//     name: 'John',
//     age: 30,
//     isMarried: false,

//     showDetails : function(){
//         console.log(this.name + " is " + this.age + " years old " + " and is " + this.isMarried);
//     }
// }
// person1.showDetails();


// let person2 = {
//     name: 'Sara',
//     age: 25,
//     isMarried: true,
   
// }
// person1.showDetails.call(person2);

//-----------------

//iss function ko kisi ek hi object k ander define karne se acha hai isko globally hi define kar lete hai

// let person1 = {
//     name: 'John',
//     age: 30,
//     isMarried: false,

  
// }



// let person2 = {
//     name: 'Sara',
//     age: 25,
//     isMarried: true,
   
// }

// // let showDetails = function(){
// //     console.log(this.name + " is " + this.age + " years old " + " and is " + this.isMarried);
// // }
// let showDetails = function(city,car){
//     console.log(`${this.name} is ${this.age} years old and is ${this.isMarried} and lives in ${city} and drives a ${car}`);
// }


// showDetails.call(person1,'Delhi','BMW');// call bhi kar sakte hai sath hi sath external arguments ko pass bhi kar sakte hai 
// showDetails.call(person2,'Mumbai','Audi');



//--------------APLLY METHOD

// let person1 = {
//     name: 'John',
//     age: 30,
//     isMarried: false,

  
// }



// let person2 = {
//     name: 'Sara',
//     age: 25,
//     isMarried: true,
   
// }


// let showDetails = function(city,car){
//     console.log(`${this.name} is ${this.age} years old and is ${this.isMarried} and lives in ${city} and drives a ${car}`);
// }


// showDetails.apply(person1,['Delhi','BMW']);// aplly me sirf external arguments ko array me pass karte hai
// showDetails.call(person2,['Mumbai','Audi']);



//------------------BIND METHOD


let person1 = {
    name: 'John',
    age: 30,
    isMarried: false,

  
}



let person2 = {
    name: 'Sara',
    age: 25,
    isMarried: true,
   
}


let showDetails = function(city,car){
    console.log(`${this.name} is ${this.age} years old and is ${this.isMarried} and lives in ${city} and drives a ${car}`);
}


let showDetailsIsBind = showDetails.bind(person1,'Delhi','BMW');
showDetailsIsBind();

// ye bind ka matlab aese samajh sakte hai ki ye function ko bind karke rakh leta hai aur usko kisi another function me aur phir hum jab chahe tab call kar sakte hai
