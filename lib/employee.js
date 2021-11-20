class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(this.name);
        //return this.name;
    }

    getEmail() {
        console.log(this.email);
        //return this.email;
    }

    getId() {
        console.log(this.id);
        //return this.id;
    }

    getRole() {
        console.log(`Employee`);
        //return `Employee`;
    }
}

module.exports = Employee;
