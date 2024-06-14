// const person = {
//     firstname : "Ibrahim",
//     surname   : "Muradov",
//     age       : 18,

// }


class Person  {
    name;
    surname;

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

}

const person = new Person(name = "Ibrahim", surname = "Muradov")


console.log(person)