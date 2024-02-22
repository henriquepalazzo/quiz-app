const button = document.querySelectorAll("button");
const bookmark = document.querySelectorAll(".bookmark");
const allPages = document.querySelectorAll("[data-js*='page']");
const allLinks = document.querySelectorAll("[data-js*='link']");

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    allPages.forEach((page) => {
      page.classList.remove("current");
    });
    const hrefAttribute = event.currentTarget.getAttribute("href");
    const currentPage = document.querySelector(hrefAttribute);
    currentPage.classList.add("current");
    checkActive(hrefAttribute);
  });
});

function checkActive(hrefAttributeActive) {
  allLinks.forEach((link) => {
    let hrefAttribute = link.getAttribute("href");
    if (hrefAttribute === hrefAttributeActive) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
}
button.forEach((element) => {
  element.addEventListener("click", (event) => {
    const cardAnswer = event.target.parentElement.querySelector(".answer");
    cardAnswer.classList.toggle("hidden");
    event.target.textContent = cardAnswer.classList.contains("hidden")
      ? "Show answer"
      : "Close answer";
  });
});

bookmark.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.target.classList.toggle("inactive");
  });
});
