/**
 * Class definition 
 */

class Person {

    /**
     * @params {string} name
     * @params {string} surname
     */

    firstname;
    lastname;

    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
 
    greed() {
        console.log(`Hello ${this.firstname} ${this.lastname}`)
    }
}

const person = new Person("ibrahim", "Muradov")
person.greed()




