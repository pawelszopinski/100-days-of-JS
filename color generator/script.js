const color = document.querySelector('.color')
const button = document.querySelector('.generate')
const container = document.querySelector('.container')

button.addEventListener("click",()=>{
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    console.log(randomColor)
    color.textContent = randomColor
    container.style.backgroundColor = randomColor
})

// button.addEventListener("click",()=>{
//     const randomColor = `#${Math.random().toString(16).substring(2,8)}`
//     console.log(randomColor)
//     color.textContent = randomColor
//     container.style.backgroundColor = randomColor
// })