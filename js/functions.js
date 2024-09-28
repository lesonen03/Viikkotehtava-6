const button = document.querySelector('button')
const table = document.querySelector('table')
const counter = document.querySelector('p')
let jokerRows = 0

button.addEventListener('click', () => {

    row = table.insertRow(0)
    
            
    for (let i = 0; i < 7; i++) {
        const CELL1 = row.insertCell(0)
        const randomNumbers = Math.floor(Math.random () * 10)
        CELL1.innerHTML = randomNumbers
    }
    
    counter.innerHTML = "Valmiita rivejä " + jokerRows++
        
            
})