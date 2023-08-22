const btn = document.getElementById('btn')
const input = document.getElementById('input')
const text = document.querySelector('.text')
console.log(btn, input,text)

btn.addEventListener("click", checkPalindrome)

function checkPalindrome(){
    let word = input.value
    let wordLength = word.length

    let start = word.substring(0,Math.floor(wordLength/2)).toLowerCase()
    let end = word.substring(wordLength - Math.floor(wordLength/2)).toLowerCase()
    // let flip = end.split('').reverse().join('')
    let flip = [...end].reverse().join('')

    if(start===flip) {
        text.textContent = `${word} is a palindrome`
    }
    else{
        text.textContent = `${word} is NOT a palindrome`

    }
    
    console.log(word,wordLength,start, end,flip)
}