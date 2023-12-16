const btn = document.getElementById("btn");
const quotesEl = document.querySelector(".quotes");

btn.addEventListener("click", getQuote);

function getQuote(e) {
  e.preventDefault();

  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      const quoteIndex = Math.trunc(Math.random() * data.length);
      const randomQuote = data[quoteIndex];
      let output = "";
      output = `
      <p><b>${randomQuote.author}</b>
      <em>${randomQuote.text}</em></p>`;
      quotesEl.insertAdjacentHTML("beforeend", output);
    });
}
