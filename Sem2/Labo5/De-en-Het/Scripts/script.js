const setup = () => {

let knop = document.getElementById("knop");

knop.addEventListener("click", verander);

}

const verander = () => {

    let HTMLText = document.getElementById("text");
    let text = HTMLText.innerText;

    const textarr = [];
    let previousI = 0;

    for (let i = 0; i <= text.length; i++) {
        if (text.charAt(i) === ' ') {
            textarr.push(text.substring(previousI,i));
            previousI = i;
        }
        if (i === text.length) {
            textarr.push(text.substring(previousI,i));
        }
    }
    console.log(textarr);

    const arr2 = [];

    for (let i = 0; i < textarr.length; i++) {
        if (textarr[i].trim().includes('de')) {
            arr2.push('het');
        }
        else {
            arr2.push(textarr[i].trim());
        }
    }
    console.log(arr2);
    HTMLText.innerHTML = arr2.join(' ');
}

window.addEventListener("load", setup);