const number = document.querySelector('.number')
const button = document.querySelector('.generate')

button.addEventListener("click",()=>{
    number.textContent = Math.floor(Math.random()*100)+1
})