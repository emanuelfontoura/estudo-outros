const divs = document.querySelectorAll('div')

divs.forEach(div => {
    div.addEventListener('click', func) // true = desativa o event bubbling e ativa o event capturing
    // false = ativa o event bubbling e desativa o event capturing
})

function func(event){
    event.stopPropagation() // desativa o event bubbling e o event capturing
    console.log(event.currentTarget)
}