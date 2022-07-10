console.log("Program start")

setTimeout(()=>{
    console.log("I am set time out")
},1000)

Promise.resolve().then((val)=>{
    console.log("Promises output")
})

console.log("Program ends")


//--------OUTPUT

// Program start
// Program ends
// Promises output - ye node api se microstack queue me chala jata hai jitni bhi promisify output hota hai
// I am set time out

// PRIORTY => sabse pehli priority micro stack queue ko milti hai callback queue k comparision mein aur ye microstack queue k cheze phir global execution context me jati hai aur waha se execution hota hai