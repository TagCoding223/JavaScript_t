const hello=require("./j164_Modules_f1") // work when single and multiple method comes
// when multple method coming then also use after store it into different variables
const {bye,morning}=require("./j164_Modules_f1")

// hello() its work when import only single method

// when import mutliple files then
// hello.hello() it not work because we are not import it
hello.bye()
hello.morning()

bye()
morning()