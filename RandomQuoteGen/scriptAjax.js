const btn = document.getElementById("btn");
const quotesEl = document.querySelector(".quotes");
const number = document.getElementById('number')
btn.addEventListener("click", getQuote);
function getQuote(e) {
  e.preventDefault();
  if (number.value.length == 0) {
    return alert("Please enter a number");
  } else {
    const http = new XMLHttpRequest();

    http.open("GET", "https://type.fit/api/quotes", true);

    http.onload = function (quote) {
      console.log(this.responseText);
      if (http.status === 200) {
        quotesEl.innerHTML = ''
        const quotes = shuffle(JSON.parse(http.responseText));
        let output = "";
        // quotes.forEach((quote) => {
        //   output += `
        // <ul>
        // <hr/>
        // <li>Author: ${quote.author}</li>
        // <li>Text: ${quote.text}</li>
        // </ul>
        // `;
        // });
for (let i = 0; i < quotes.length; i++) {
   if (i== number.value) {break;}
   output += `
        <ul>
        <hr/>
        <li>Author: ${quotes[i].author}</li>
        <li>Text: ${quotes[i].text}</li>
        </ul>
        `
}
        
        quotesEl.innerHTML = output;
      }
    };
    http.send();
  }
}

// function to shuffle quotes 

function shuffle(quotes) {
  let CI = quotes.length, tempValue, randomIndex

  // While elements exist in the array
  while(CI>0) {
    randomIndex = Math.trunc(Math.random()*CI)
    // Decrease by one;
    CI--;
    // Swap the last element with CI
    tempValue = quotes[CI];
    quotes[CI]= quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}