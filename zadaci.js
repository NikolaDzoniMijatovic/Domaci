let osoba = [
    {
        ime: "Nikola",
        prezime: "Mijatovic",
        godina: "27",
        telefon: "0691234567"
    },
    {
        ime: "Mijat",
        prezime: "Nikolic",
        godina: "72",
        telefon: "0697654321"
    }
];

for(property in osoba) {
    console.log(osoba[property].ime, osoba[property].prezime);
    function zameniImena() {
        console.log(osoba[0].ime = "Mijat");
        console.log(osoba[1].ime = "Nikola");
    }
}

function imeIPrezime() {
    console.log(osoba[0].ime, osoba[0].prezime);
    console.log(osoba[1].ime, osoba[1].prezime);
}

imeIPrezime();
zameniImena();