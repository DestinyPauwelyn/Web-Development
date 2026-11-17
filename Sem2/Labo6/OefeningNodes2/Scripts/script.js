const setup = () => {

    listitems = document.querySelectorAll("li");
    for (let i = 0; i < listitems.length; i++) {
        listitems[i].setAttribute("class", "listitem");
    }

}

window.addEventListener("load", setup);