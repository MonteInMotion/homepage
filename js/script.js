{
    const welcome = () => {
        console.log("Dzień dobry! Mam nadzieję, że wszystko działa 😅" )
    }

    welcome();

    const onshowContentonClick = () => {
        const paragraphContent = document.querySelector(".js-paragraphContent");
        const buttonText = document.querySelector(".js-buttonText");

        paragraphContent.classList.toggle("paragraphContent--hidden");
        buttonText.innerText = paragraphContent.classList.contains("paragraphContent--hidden") ? "Zobacz opis książki" : "Ukryj opis książki";
    };

    const init = () => {
        const showContentButton = document.querySelector(".js-showContentButton");

        showContentButton.addEventListener("click", onshowContentonClick)
    }

    init();
}