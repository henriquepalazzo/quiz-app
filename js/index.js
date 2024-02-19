const button = document.querySelectorAll("button")

button.forEach((element)=>{
    element.addEventListener("click", (event) => {
        const cardAnswer = event.target.parentElement.querySelector(".answer")
        cardAnswer.classList.toggle("hidden")
        event.target.textContent = cardAnswer.classList.contains("hidden") ? "Show answer" : "Close answer"
    })
})