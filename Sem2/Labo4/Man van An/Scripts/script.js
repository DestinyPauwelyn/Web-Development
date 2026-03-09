const setup = () => {

    /*let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    tekst = tekst.toLowerCase();
    const zoek = "an";

    let count = 0;
    let pos = tekst.indexOf(zoek);

    while (pos !== -1) {
        count++;
        pos = tekst.indexOf(zoek, pos + 1);
    }

    console.log("Aantal keer gevonden (indexOf):", count);*/

    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    tekst = tekst.toLowerCase();
    const zoek = "an";

    let count = 0;
    let pos = tekst.lastIndexOf(zoek);

    while (pos !== -1) {
        count++;
        pos = tekst.lastIndexOf(zoek, pos - 1);
    }

    console.log("Aantal keer gevonden (lastIndexOf):", count);
}

window.addEventListener("load", setup);