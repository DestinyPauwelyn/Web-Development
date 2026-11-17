const setup = () => {

let knop = document.getElementById("knop");

knop.addEventListener("click", trigram);

}

const trigram = () => {
    let txtinput = document.getElementById("txtinput");
    let txtoutput = document.getElementById("txtoutput");
    let grootte = txtinput.value.length.trim()-2;
    const trigrammen = [];
    for (let i = 0; i < grootte; i++) {
        let txt = txtinput.value.substring(i, i+3);
        trigrammen.push(txt);
    }
    txtoutput.innerHTML = trigrammen.toString();
}

window.addEventListener("load", setup);