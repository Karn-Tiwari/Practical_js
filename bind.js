let person1 = {
    name: "John",
    age: 30,
    job: "teacher",
}

let showDetails = function (city,state){
    console.log(this.name + " " + this.age + " " + this.job + " " + city + " " + state)
}

let showDetailsBind = showDetails.bind(person1, 'Noida')
showDetailsBind("UP")


// Function.prototype.myBind = function(...args){
//     let obj = this
//     params = args.slice(1)
//     return function(...args2){
//        obj.apply(args[0], [...params , ...args2])
//     }
// }

// let showDetailsMyBind = showDetails.myBind(person1,"noida")
// showDetailsMyBind("UP")