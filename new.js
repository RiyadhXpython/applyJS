class person {
    constructor(firstName,lastName, salary){
        this.firstName =firstName
        this.lastName = lastName
        this.salary = salary

    }
}
const heroPerson = new person ("shanto", "mahamud", 25000);
console.log(heroPerson);
const friendlyPerson = new person("hello", "mamma", 25000);
console.log(friendlyPerson);

function personOld(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new person("grand", "pappa", 1200);
console.log(oldPerson);


function yourDaddy(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;

}
const daddyShanto = new person("Shanto", "mahamud", 15000);
console.log(daddyShanto);