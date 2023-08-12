const count = document.querySelector('.count')
const buttons = document.querySelector('.buttons')

buttons.addEventListener("click", (event)=>{
    if(event.target.classList.contains('add')){
        count.textContent++;
        setColor()
    }
    else if (event.target.classList.contains('subtract')) {
        count.textContent--;
        setColor()
    }
    else {
        count.textContent = 0
        setColor()
    }
})

const setColor = ()=>{
    if(count.textContent>0){
        count.style.color = 'lightgreen'
    }
    else if (count.textContent<0){
        count.style.color = 'red'
    }
    else {
        count.style.color = 'white'
    }
    
}