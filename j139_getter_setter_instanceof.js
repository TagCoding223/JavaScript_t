// getter setter and instanceof operator

class A{
    constructor(name){
        this._name=name
    }
    // getter
    set name(name){
        this._name=name
    }
    // setter
    get name(){
        console.log(this._name);
    }
}
let obj=new A('vishal')
obj.name
obj.name='kumkum'
obj.name

// instance of operator
console.log(obj instanceof A);
c=12
console.log(c instanceof A);

class B extends A{}
let objB=new B()
console.log(objB instanceof A);
console.log(objB instanceof B);