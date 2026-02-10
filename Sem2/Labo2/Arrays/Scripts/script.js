const setup = () => {

const familieleden = ['Promise', 'Desmond', 'Destiny', 'Queen', 'Philip', 'Francis'];
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);


function voegNaamToe() {
    let extraNaam = prompt('What is your name?');
    familieleden.push(extraNaam);
}
voegNaamToe();
console.log(familieleden);

console.log(familieleden.toString());

}

window.addEventListener("load", setup);