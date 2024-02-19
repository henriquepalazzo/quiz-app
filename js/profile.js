const darkModeButton = document.querySelector("#dark_mode")
const body = document.querySelector("body")

darkModeButton.addEventListener("change", (event) => {
    body.classList.toggle("dark")
})