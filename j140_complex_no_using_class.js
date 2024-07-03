// complex number using class and its addition
class Complex{
    constructor(real,imaginally){
        this.real=real
        this.imaginally=imaginally
    }
    get _real(){
        return this.real
    }
    get _imaginally(){
        return this.imaginally
    }
    set _real(value){
        this.real=value
    }
    set _imaginally(value){
        this.imaginally=value
    }
    add(obj){
        console.log(`Sum of complex number is ${this.real+obj.real} + ${this.imaginally+obj.imaginally} i`);
    }
}

let n1=new Complex(4,5)
let n2=new Complex()
console.log(`n2 real : ${n2._real} , and imaginally : ${n2._imaginally}`);
n2._real=4
n2._imaginally=5
console.log(` now , n2 real : ${n2._real} , and imaginally : ${n2._imaginally}`);
n2.add(n1)

