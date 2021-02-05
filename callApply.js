const normalPerson = {
    firstName: "riyadh",
    lastName: "mahamud",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
    }

}

const heroPerson = {
    firstName: "sajin akther",
    lastName: "nirjona",
    salary: 25000
}