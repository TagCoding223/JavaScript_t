let hello=()=>{
    console.log("hello");
}
// single method import
module.exports=hello // that are not export because we override it

let bye=()=>{
    console.log("bye");
}

let morning=()=>{
    console.log("morning");
}
// multilpe method import
module.exports={bye,morning}//same as below line
// module.exports={bye:bye,morning:morning}