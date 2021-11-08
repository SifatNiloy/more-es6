class Support {
    name;
    designation = 'Support web dev';
    address = "Bangladesh";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

let aamir = new Support('Aamir khan', 'Bd');
let rittik = new Support('Rittick Roshan', 'Dubai');
aamir.startSession();
console.log(aamir);
console.log(rittik);