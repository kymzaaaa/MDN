const single = '単一引用符';
const double = "二重引用符";
const backtick = `逆引用符`;

console.log(single);
console.log(double);
console.log(backtick);


const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number


const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string

