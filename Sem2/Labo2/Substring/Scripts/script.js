const setup = () => {

let knop = document.getElementById("knop");

    knop.addEventListener("click", substring);
}
const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let txtNr1 = document.getElementById("txtNr1");
    let txtNr2 = document.getElementById("txtNr2");
    let txtOutput = document.getElementById("txtOutput");

    let g1 = parseInt(txtNr1.value,10);
    let g2 = parseInt(txtNr2.value, 10);

    let outputString = txtInput.value.substring(g1,g2)

    txtOutput.innerHTML = outputString;
}
window.addEventListener("load", setup);