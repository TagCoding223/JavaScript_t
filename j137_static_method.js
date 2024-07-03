// static methods in class
// static method belong to entire class not to be specific object , it can be access by class , only one create in memory and every object access it ,each object has same method

class A{
    // hello(name){
    hello(){
        console.log("hello");
        // console.log(A.cap(name)); its work
    }
    static cap(word){
        return word.charAt(0).toUpperCase()+word.substr(1,word.length)
    }
}

let a= new A()
a.hello()
// a.hello("jio")
// a.cap("vishal") // TypeError: a.cap is not a function (cannot access static method using objects)
let b=A.cap('vishal')
console.log(b);

let c=new A(A.cap("kumkum"));
console.log(c);