// Ambilah tiap index dalam kalimat string disamping : "I am going to be React JS Developer". Dengan output : 
// 	First word: I 
// 	Second word: am 
// 	Third word: going 
// 	Fourth word: to 
// 	Fifth word: be 
// 	Sixth word: React 
// 	Seventh word: JS
// 	Eighth word: Developer

let kata = "I am going to be React JS Developer";
let words = kata.split(" ");

for (let i = 0; i < words.length; i++) {
  console.log(`${i+1} word: ${words[i]}`);
}