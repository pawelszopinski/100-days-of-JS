const btn = document.getElementById("btn");
const quotesEl = document.querySelector(".quotes");
const number = document.getElementById("number");
btn.addEventListener("click", getQuote);

function getQuote(e) {
  e.preventDefault();
  quotesEl.innerHTML = "";
  if (number.value <= 0) {
    return alert("Please enter a number");
  } else {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        data = shuffle(data);

        let output = "";
        for (let i = 0; i < data.length; i++) {
          if (i ===Number(number.value)) {
            break;
          }
          output += `
    <ul>
    <li>Author: ${data[i].author}</li>
    <li>Text: ${data[i].text}</li>
    </ul>
    `;
        }
        quotesEl.innerHTML = output;
      });
  }
}

function shuffle(quotes) {
  let CI = quotes.length,
    tempValue,
    randomIndex;

  // While elements exist in the array
  while (CI > 0) {
    randomIndex = Math.trunc(Math.random() * CI);
    // Decrease by one;
    CI--;
    // Swap the last element with CI
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
