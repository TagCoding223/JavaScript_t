let nam="vishal";
console.log(nam.length);// length is a property
console.log(nam.toUpperCase());// each method return a new string never make change in current string because string is immutable
nam[2]='g'; // here we try to make changes in string but it cannot make changes
console.log(nam);
nam="VISHal";
console.log(nam.toLowerCase());// if string have a lowercase you see no impact 
console.log(nam.slice(1,4));// print from index 2 to 4-1
console.log(nam.slice(3));// print from 3 to end
nam="vishal chouhan";
console.log(nam.replace("chouhan","king"));// replace method is case sensitive
console.log(nam.replace("Chouhan","Boss"));// no changes 
let last_name="chouhan";
nam="vishal";
console.log(nam.concat(" is my first name and ",last_name," is my last name"));

let space="         "+"trim"+"        ";
console.log(space);
console.log(space.trim());
