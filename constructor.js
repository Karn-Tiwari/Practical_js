function car(brand,model,color){
    this.brand = brand;
    this.model = model;
    this.color = color;

    this.drive = function(){
        console.log("I am Driving" + " " +  this.brand + " " + this.model);
    }

}

let car1 = new car('BMW','X5','black');// this - {}
let car2 = new car('mercedes','c class','red');//this - {}

// car1.brand = "jaguar";
// console.log(car1.brand)
// console.log(car1.model)
// console.log(car2.brand)

car1.drive()