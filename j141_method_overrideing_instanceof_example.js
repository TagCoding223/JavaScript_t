class Human{
    name(){
        console.log("human denote a specise");
    }
    eat(){
        console.log("human eat any time when they are hungry");
    }
}
class Student extends Human{
    name(){
        console.log("studnet study");
    }
    eat(){
        super.eat()
        console.log("but student eat at lunch time");
    }
}

let a= new Student()
a.name()
a.eat()
