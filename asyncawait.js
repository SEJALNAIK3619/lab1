console.log("JavaScript Async/Await");

async function xyz(){
    var p1 = new Promise((a,b)=>{
        setTimeout(()=>{
            a(45)
        },8000)
    });

    var p2 = new Promise((a,b)=>{
        setTimeout(()=>{
            a(55)
        },5000)
    })

    var p3 = new Promise((a,b)=>{
        setTimeout(()=>{
            a(65)
        },2000)
    });

    var a = await p3;
    var b = await p2;
    var c = await p1;
    console.log(a);
    console.log(b);
    console.log(c);
}

xyz();