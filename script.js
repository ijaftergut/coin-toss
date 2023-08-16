document.addEventListener("DOMContentLoaded", function() {

const possible = document.querySelectorAll(".guess");
const answer = document.getElementById('answer')
possible.forEach(guess => guess.addEventListener('click', (e) => {
    let guess = e.target.id
    test()
    if (flipanswer === guess){
        answer.innerHTML = `Your guess was ${guess}, the answer was ${flipanswer}, you are correct!`
    } else{
        answer.innerHTML = `Your guess was ${guess}, the answer was ${flipanswer}, you are incorrect!`
    }
    
}))

})
function test(){
    flipanswer1 = Math.floor(Math.random() * 2)+ 1
    if (flipanswer1 === 1) {
        return flipanswer = "Heads"
    } else if (flipanswer1 === 2) {
        return flipanswer = "Tails"
    } else {
        return flipanswer = "NAN"
    }
}