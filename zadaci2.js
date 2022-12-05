class Hrana {
    constructor(slatko, slano) {
        this.slatko = slatko;
        this.slano = slano;
    }

    probajHranu() {
        console.log(`${this.slatko} i ${this.slano} su ukusne`);
    }
}

class SlatkaHrana extends Hrana {
    constructor(imeHrane, kafic) {
        super(imeHrane);
        this.kafic = kafic;
    }

    duzinaSpremanja() {
        console.log("Za tulumbu treba" + " " + Math.floor(Math.random() * 10) + " " + "minuta");
    }
}

class SlanaHrana extends Hrana {
    constructor(imeHrane, kafic) {
        super(imeHrane, kafic);
    }

    duzinaSpremanja() {
        console.log("Za palacinku treba" + " " + Math.floor(Math.random() * 10) + " " + "minuta");
    }
}

let slatko = new SlatkaHrana("tulumba", "lipa");
slatko.duzinaSpremanja();
let slano = new SlanaHrana("palacinka", "cezar");
slano.duzinaSpremanja();

let kuvar = new Hrana("Tulumbe", "Palacinke");
kuvar.probajHranu();