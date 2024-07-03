// arrow function
const a = () => {console.log("a");}
const b = () => console.log("b");
const c = () => console.log("c1"); console.log("c2"); //c2 not a part of c function that's way not recommended
const z = () =>{ console.log("z1"); console.log("z2"); }
a()
b()
c()

const d = (name) => console.log(name);
const e = name => console.log(name);

// when pass multiple arguments then () are necessary
const f = (name,friend) => console.log(name,friend);

d("vishal")
e("kumkum")
f("shiv","udit")

const j=name=>{console.log(`j name : ${name}`);} 
j("vishal","kumkum") // its work and take first argument,and other arguments are ignored
