const setup = () => {


    let wijzigen = document.getElementById("wijzig");

    wijzigen.addEventListener("click",Wijzig)

    function Wijzig() {
        let pElement = document.getElementById("txtOutput");

        pElement.innerHTML = "Welkom!"
    }
}

window.addEventListener("load", setup);