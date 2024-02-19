const form = document.querySelector("form")
const inputQuestion = document.querySelector("#question")
const inputAnswer = document.querySelector("#answer")
const counterQuestion = document.querySelector(".question.characters_counting")
const counterAnswer = document.querySelector(".answer.characters_counting")

counterQuestion.querySelector("span").textContent = 130 - inputQuestion.value.length
inputQuestion.addEventListener("input", (event) => {
    counterQuestion.querySelector("span").textContent = 130 - event.target.value.length
})
counterAnswer.querySelector("span").textContent = 130 - inputAnswer.value.length
inputAnswer.addEventListener("input", (event) => {
    counterAnswer.querySelector("span").textContent = 130 - event.target.value.length
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const elements = new FormData(event.target)
    const data = Object.fromEntries(elements)
    console.log(data)
    const card = document.createElement("article")
    card.classList.add("card")
    const bookmark = document.createElement("div")
    bookmark.classList.add("bookmark", "inactive")
    card.append(bookmark)
    const question = document.createElement("h2")
    question.textContent = data.question
    card.append(question)
    const button = document.createElement("button")
    button.textContent = "Show answer"
    card.append(button)
    const answer = document.createElement("div")
    answer.innerHTML = `<p>${data.answer}</p>`
    answer.classList.add("answer", "hidden")
    card.append(answer)
    const tagList = document.createElement("ol")
    tagList.classList.add("tags")
    tags = data.tags.split(", ")
    tags.forEach(element => {
        const tag = document.createElement("li")
        tag.textContent = element
        tagList.append(tag)
    });
    card.append(tagList)
    form.parentElement.append(card)
    button.addEventListener("click", (event) => {
        const cardAnswer = event.target.parentElement.querySelector(".answer")
        cardAnswer.classList.toggle("hidden")
        event.target.textContent = cardAnswer.classList.contains("hidden") ? "Show answer" : "Close answer"
    })
    bookmark.addEventListener("click", (event) => {
        event.target.classList.toggle("inactive")
    })
    form.reset()
})