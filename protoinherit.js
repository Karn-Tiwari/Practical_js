// let arr = [1,2,3,4,5]
// PROTOTYPAL INHERITANCE
// jaisi hi person1 ko person2 pe asssin kiya waese hi person2 jo hai wo person1 ki sari property ko access karne lag gaya iseliye agar koi cheez person2 k paar nhi hogi to wo person1 me se dhoondh k return kar dega

let person1 = {
    name: 'John',
    age: 30,
}
showDetails = function(){
    console.log(this.name + ' ' + this.age)
}

let person2 = {
    name: 'steve',
}

person2.__proto__ = person1;
console.log(person2.name + " " + person2.age)
person2.showDetails()
