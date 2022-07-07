let person1 = {
    name: "John",
    age: 30,
    job: "teacher",
}

let showDetails = function (){
    console.log(this.name + " " + this.age)
}

let showDetailsBind = showDetails.bind(person1)
showDetailsBind()