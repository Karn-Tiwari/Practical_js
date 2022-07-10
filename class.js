// // Isme classes ka use karke object return karna hao
// // NOTE javascript me inbluilt classes hoti hi nhi hai 

// class person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     showDetails(){
//         return this.name
//     }
// }


// let person1 = new person('John', 30);
// console.log(person1.showDetails())



class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showDetails(){
        return this.name
    }
}

// now we are going to do classical inheritance
 // lekin lekin lekin javascript me inheritance suggested nhi hota hai kafi sari problems hoti ahi
 
class personChild extends person {
    constructor(){
        super('Steve');
    
    }
    
}


let person1 = new personChild();
console.log(person1.showDetails())