const setup = () => {

let text = document.querySelectorAll("p");

    for (let i = 0; i < text.length; i++) {
        text[i].innerHTML = "Goed gedaan!";
    }

}

window.addEventListener("load", setup);