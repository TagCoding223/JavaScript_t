// functions inside objects
// this keyword details
// case 1 : when execution point a place that present inside a function and that function present inside a object then this keyword represent those object
// case 2 : when execution point at global place then this keyword point to global object (object is window when we use browser js engine , otherwise object is Object)
// case 3 : when execution present inside an event listener then this keyword referer to that element thosr create an event.

const x={
    name:"vishal",
    show:function(){
        console.log(`x this : ${this}`);
        console.log(`x this.name : ${this.name}`);
    }
}
x.show()

// but if we use scheduling inside object function then when schedule code invoked this keyword reference changed , that why object variable can't access in scheduled code when we use function keyword to create a new function inside schedure code

const y ={
    name:"kumkum",
    show:function(){
        console.log(`y this : ${this}`);
        setTimeout(function(){
            console.log(`y scheduled this : ${this}`);
            console.log(`y scheduled this.name : ${this.name}`);
        }, 3000);
    }
}
y.show()

// code will be schuduler and js engine go to outside object and its scope will be end that why we cannot access object values when schuder funtion will be invoked.

// this keyword -> reference -> depend on js engine current positionn

// solution 1 : old way 

const m ={
    name:"udit",
    show:function(){
        console.log(`m this : ${this}`);
        let that=this
        setTimeout(function(){
            console.log(`m scheduled this : ${this}`);
            console.log(`m scheduled that : ${that}`);
            console.log(`m scheduled this.name : ${that.name}`);
        }, 3000);
    }
}
m.show()

// solution 2 : create function as an arrow function
const j ={
    name:"sherya gupta",
    show:function(){
        console.log(`this : ${this}`);
        setTimeout(()=>{
            console.log(`j scheduled this : ${this}`);
            console.log(`j scheduled this.name : ${this.name}`);
        }, 3000);
    }
}
j.show()

// in that case this keyword will be refer to parent lexical environment -> we called it lexical this
// arrow function use lexical this(this refer to parent lexical environment this)