// //--------------------
// // 2 - 2 second k interval ka baad ye call hota jayega aur Hi print hota rahega infinite loop mein

// let counter = 0;
// let intervalId


// function sayHi(){
//     counter++;
//     console.log("Hi")
//     if (counter >=3){
//         clearInterval(intervalId)
//     }
// }


// intervalId = setInterval(sayHi,2000)


//------------------------------

//set interval ka polyfill

function createSetInterval(){

    let intervalId = 0;
    let intervalMap = {}

    function setIntervalPolyfill(callback,delay =0,...args){
        var id = intervalId++;


        function repeat(){
            intervalMap[id] = setTimeout(() => {
                callback(...args)

                if(intervalMap[id]){
                    repeat()
                }
            }, delay);
        }


        repeat()
        return id
    }

function clearInterval(intervalId){
    clearTimeout(intervalMap[intervalId])
    delete intervalMap(intervalId)
}






    return{
        setIntervalPolyfill,
        clearIntervalPolyfill
    }
}

const{
    setIntervalPolyfill,
    clearIntervalPolyfill
} = createSetInterval


let counter = 0;
let intervalID

function greeting(){
counterr++;
console.log("Hii")

if(counter>=3){
    clearIntervalPolyfill()
}
}

intervalID = setIntervalPolyfill(greet,2000)