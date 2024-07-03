// includes method of string , find given word in string and return ture or false
let sentance="The quick brown fox jumps over the lazy dog";
let word="fox";
console.log(`The word "${word}" ${sentance.includes(word) ? "is" : "is not"} in the sentence.`);