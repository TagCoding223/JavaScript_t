// constructor overriding in js
class A{
    constructor(){
        console.log("constructor A");
    }
}

class B extends A{}

let objB=new B()
// when you not define constructor on drive class , automatically base class constructor invoked , because js engine create a default constructor like that in drive class
/*
constructor(...args){
    super(...args)
}
*/

// we set variables in super class constructor with base class reference if it does not have any constructor using default constructor
class C{
    constructor(name){
        this.name=name
    }
}
class D extends C{
    show(){
        console.log("Name is : ",this.name);
    }
}

let objD =new D("vishal")
objD.show()

// in js if you drive a class from base class then you need to consiter to call super class constructor always another wise you face an error

class E extends A{
    constructor(){
        console.log("i'm E class");
        // console.log(this); // this line throw error -> ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

        super()// if we command the line then we face -> ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

        console.log(this);
        // in js is neccessary to call base class constructor always (you have no chooise) and use super keyword before use of this keyword otherwise an error occur
    }
}

let objE=new E()