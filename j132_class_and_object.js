// Class and Object
// In js we does not need to decalre variables , it can be declare auto matically by js engine
class A{
    setDetials(name,section,rollno){
        this.name=name
        this.section=section
        this.rollno=rollno
    }
    getDetails(){
        console.log(`Name : ${this.name}`);
        console.log(`Section : ${this.section}`);
        console.log(`Rollno : ${this.rollno}`);
    }
}

let student1=new A()
student1.setDetials("vishal","M16","223")
student1.getDetails()

let student2=new A()
student2.setDetials("kumkum","M14","22323")
console.log("Name in student2 : ",student2.name);
console.log("Section in student2 : ",student2.section);
console.log("Rollno in student2 : ",student2.rollno);