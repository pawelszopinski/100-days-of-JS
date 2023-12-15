const btn = document.getElementById('btn')
const quotesEl = document.querySelector(".quotes")


btn.addEventListener("click", getQuote)
function getQuote(e){
e.preventDefault();
const http = new XMLHttpRequest();

http.open("GET","https://type.fit/api/quotes",true )

http.onload= function(quote){
  console.log(this.responseText);
  if(http.status===200){
    const quotes = JSON.parse(http.responseText)
    let output =""
    quotes.forEach(quote => {
      output+= `
      <ul>
      <hr/>
      <li>Author: ${quote.author}</li>
      <li>Text: ${quote.text}</li>
      </ul>
      `
    });
    quotesEl.insertAdjacentHTML("beforebegin", output)
  }
}
http.send()
}