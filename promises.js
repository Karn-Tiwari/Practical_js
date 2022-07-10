const PENDING = 0
const FULFILLED = 1
const REJECTED = 2

function customPromise(executor){
    let state = PENDING
    let value = null
    let handlers = []
    let catchers = []



    function resolve(result){
        if(state !== PENDING)
        return;
        state = FULFILLED
        value = result

        handlers.forEach((h)=>h(value))
    }

    function reject(err){
        if(state!== PENDING) return;

        state = REJECTED
        value = err

        catchers.forEach((c)=>c(value))
    }

    this.then = function(Successcallback){
        if(state === FULFILLED){
            Successcallback(value)
        }
        else{
            handlers.push(Successcallback)
        }

    }
    this.catch = function(failureCallback)
    {
        if(state === REJECTED){
            failureCallback(value)
        }
        else{
            catchers.push(failureCallback)
        }
    }


    executor(resolve,reject)
}

const dowork = (res,rej) =>{
    if(2 == 2){
    setTimeout(() => {
        res('Promise Resolved, Hello')
    }, 1000);}
    else {
        setTimeout(() => {
            res('Promise Rejected, Byee')
        }, 1000);
    }
}

let greetMsg= new customPromise(dowork)

greetMsg.then((val)=> {
    console.log("then log",val)
})

greetMsg.catch((val)=> {
    console.log("catch log",val)
})