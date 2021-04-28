let showContentButton = document.querySelector(".js-showContentButton");
let buttonText = document.querySelector(".js-buttonText");
let paragraphContent = document.querySelector(".js-paragraphContent");



showContentButton.addEventListener("click", () => {
    paragraphContent.classList.toggle("paragraphContent--hidden");

    buttonText.innerText = paragraphContent.classList.contains("paragraphContent--hidden") ? "Zobacz opis książki" : "Ukryj opis książki";
})