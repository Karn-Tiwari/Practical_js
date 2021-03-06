// we have to order 1 cup of coffee from coffeshop with the help of promises
function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink === 'coffee'){
            resolve('🤩 Order is Placed');
        }else{
            reject('Sorry🙄 , we only serve Coffee');
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve)// ab hamare pass order aa gaya to ab usko accet karne k baad reject nhi kar sakte hai na iseliye hme resove hi likhna hai reject nhi
    {
    console.log('Order is being processed');
    resolve(`Coffee served for the ${order}`);
    })
}


// placeOrder('coffee').then(function(orderFromCustomer){
//     console.log('Request Recieved');
//     let orderIsProcessed = processOrder(orderFromCustomer);
//     return orderIsProcessed;
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed);
// }).catch(function(err){
//     console.log(err)
// })
//Async-await

async function serveOrder(){
    try{//try block k ander agar error ata hai to catch statement me chala jata hai
    const orderRecieved = await placeOrder('coffee')// await karega uss request k fullfill hone ka await karega 
    console.log(orderRecieved)// order tooo recieved ho gaya hai uske baad process order ho chuka hia next line k liye
    const processedOrder = await processOrder(orderRecieved)
    Concole.log(processedOrder)
} catch (error){
console.log(error)
}
} 
serveOrder();