// js engine find variable like that -> function side(locally) -> parent function (if avaliable , and not present in local) -> look inside global
function returnFun(){
    const a=()=>{
        let m=1
        console.log(`m inside a is : ${m}`);
        const b=()=>{
            // let m=2
            console.log(`m inside b is : ${m}`);
            const c=()=>{
                let m=3
                console.log(`m inside c is : ${m}`);
            }
            c()
        }
        m=45
        b()
    }
    return a
}

let a=returnFun()
a()