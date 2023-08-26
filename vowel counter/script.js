const btn = document.getElementById("btn");
const input = document.getElementById("input");
const text = document.querySelector(".text");
console.log(btn, input, text);

btn.addEventListener("click", countVowel);

function countVowel() {
  let vowelCount = 0;
  let wordVal = input.value.toLowerCase();

  //   for (let i = 0; i < wordVal.length; i++) {
  //     let letter = wordVal[i];
  //     if (letter.match(/[a,e,i,o,u]/)) {
  //       vowelCount++;
  //     }
  [...wordVal].forEach((letter) => {
    if (letter.match(/[a,e,i,o,u]/)) {
      vowelCount++;
    }
  });
  const vowelText = vowelCount === 1 ? "vowel" : "vowels";

  text.textContent = `${wordVal.toUpperCase()} has ${vowelCount} ${vowelText}`;
}
// }
