async function hello(){
    return "I am a promise" // this is a resolve promise
}

async function bye(){
    return new Error("This is bye error") // this is a rejected promide
}

hello().then((value)=>{
    console.log(value);
},(err)=>{
    console.log(err);
})

bye().then((value)=>{
    console.log(value);
},(err)=>{
    console.log(err);
})



// when we use async keyword with a function that mean that function return a promise

// Promise -> wait i am getting the info , when it comes successfully then i will resolve it.