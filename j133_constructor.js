// comstructor in class
class A{
    // when we does not provide any constructor then js engine provide a default constructor, they look like that ,
    /*
        constructor(...args){
            super(...args) this line run when this class inherit from a base class
        }
    */
    constructor(name,lover){
        console.log("i'm called without user invoked !");
        this.name=[name]
        this.lover=lover
    }
    show(){
        console.log(`Name is : ${this.name}`);
        console.log(`Lover is : ${this.lover}`);
        console.log(`typeof(this.name) : ${typeof(this.name)} , typeof(this.lover) : ${typeof(this.lover)}`);
    }
}
let obj=new A("kumkum","vishal")
obj.show()