const setup = () => {

    const button = document.getElementById("button");
    button.addEventListener('click', knop);

    let text = document.getElementById('text');
    console.log(maakMetSpaties(text.value));

}
const knop = () => {
let text = document.getElementById("text");
let nText = text.value.replace(/\s+/g, '');
let spaced = nText.split("").join(" ");
console.log(spaced);
}
const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText[i];
        if (i < inputText.length - 1) {
            result += " ";
        }
    }
    return result;
};

window.addEventListener("load", setup);