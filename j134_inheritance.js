// inheritance in javascript
class A{
    hello(pass){
        console.log("i'm hello with "+pass);
    }
}
class B extends A{
    bye(pass){
        console.log("i'm bye with "+pass);
    }
}

let objA=new A()
objA.hello("objA")

let objB=new B()
objB.hello("objB")
objB.bye("objB")