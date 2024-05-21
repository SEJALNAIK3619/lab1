console.log("JavaScript Promises");

var p1 = new Promise((a,b)=>{
    setTimeout(()=>{
        a("Promise 1 is resolved");
    },3000)
});

var p2 = new Promise((a,b)=>{
    setTimeout(()=>{
        b("Promise 2 is Reject");
    },1000)
})

p1.then((value)=>{
    console.log(value);
})
p2.catch((error)=>{
    console.log(error);
})