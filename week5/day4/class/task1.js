class Person {
    #name;
    #age;
    #country;

    constructor(name, age, country) {
        this.name= name;
        this.country = country;
        this.age = age;
    }

    set name(name) {
        this.#name = name
    }

    set age(age) {
        this.#age = age
    }

    set country(country) {
        this.#country = country
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get country() {
        return this.#country;
    }
}


const person = new Person("ibrahim", 18, "Azerbaijan");
const name = person.name;
const age = person.age;
const country = person.country;

console.log(name, age, country)