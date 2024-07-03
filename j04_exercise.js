// question 1 : add string and number
let a="hello";
let b=6;
console.log(a+b);// result -> hello6 

// question 2 : find type of a+b
console.log(typeof (a+b));//result -> string 

// question 3 : try to change a object reference to another datatype when use let
let c={
    a:2,
    b:"ho",
    c:9
}
c=8;
console.log(c)

// question 4 : try to change a object reference to another datatype when use const
const d={
    // key value pair
    1:"x",
    2:"y",
    3:"z"
}
// d=5; error because d is const and a refernce but allow to change object values and also add a new
d["1"]="o";
d["4"]="m";
console.log(d);

// question 6 : make a dictionary object
let dictionary={
    "love":"unexplaneable filling",
    "hardwork":"doing work hard to get best in life",
    "rich":"don't wary to think about money"
}
console.log(dictionary);