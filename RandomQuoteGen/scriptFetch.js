const btn = document.getElementById("btn");
const quotesEl = document.querySelector(".quotes");
const number = document.getElementById("number")
btn.addEventListener("click", getQuote);

function getQuote(e) {
  e.preventDefault();
  quotesEl.innerHTML=''
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      if(number.value.length ===0) {
        return alert("Please enter a number")
      }
      else {
        quotesEl.innerHTML = ''
      const quoteIndex = Math.trunc(Math.random() * data.length);
      const randomQuote = data[quoteIndex];
      let output = "";
      output = `
      <p><b>${randomQuote.author}</b>
      <em>${randomQuote.text}</em></p>`;
      quotesEl.insertAdjacentHTML("beforeend", output);
    }
      }
      );
}
