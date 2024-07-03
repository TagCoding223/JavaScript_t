// arithmaetic operators
let a=4,b=5;
console.log("a + b is : ",(a+b));
console.log("a - b is : "+(a-b));// apend result as a string
console.log("a * b is : ",(a*b));
console.log("a / b is : ",(a/b)); // give accurate value in floating point number
console.log("a % b is : ",(a%b));
console.log("a ** b is : ",(a**b)); // exponentiation operator  p power of a
console.log("a++ is : ",(a++));
console.log("a-- is : ",(a--));
console.log("value of a : ",a);
console.log("++b is : ",(++b));
console.log("--b is : ",(--b));
console.log("value of b : ",b);

// assignment operator
a+=b;// a= a+b;
console.log(a);
a-=b;
console.log(a);
a*=b;
console.log(a);
b%=a;
console.log(b);
a/=b;
console.log(a);
a**=b;
console.log(a);

// comparison operator

console.log("\na > b is : ",(a>b));
console.log("a < b is : ",(a<b));
console.log("a >= b is : ",(a>=b));
console.log("a <= b is : ",(a<=b));
console.log("a != b is : ",(a!=b));

console.log("a == b is : ",(a==b));

// tripale equals to or not equals to check value and type also
console.log("a === b is : ",(a===b));
a=4,b=4;
console.log("a === b is : ",(a===b));
a=4,b="4";
console.log("a === b is : ",(a===b));

a=78,b=89;
console.log("a !== b is : ",(a!==b));
a=4,b=4;
console.log("a !== b is : ",(a!==b));
a=4,b="4";
console.log("a !== b is : ",(a!==b));

// logical operator
console.log("(a==b)&&(a>b) is : ",(a==b)&&(a>b));
console.log("(a==b)||(a>b) is : ",(a==b)||(a>b));
console.log("!true : ",!(true));

