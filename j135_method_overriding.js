// method overriding in js
class A {
    hello(pass) {
        console.log("i'm hello with " + pass);
    }
}
class B extends A {
    bye(pass) {
        console.log("i'm bye with " + pass);
    }
    hello(pass){
        console.log("i'm hello inside B with "+pass);
        // super keyword help to call base class method inside child class methods
        super.hello(pass)
        // super keyword not compersoulry in methods(you should ignore it if you does not need it)
    }
}

let objB=new B()
objB.bye("objB")
objB.hello("objB")