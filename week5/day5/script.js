class Animal {

    constructor(name) {
        if (new.target == Animal) {
            throw new Error("You can not create an instance directly from Animal class")
        }

        Object.defineProperty(this, "getinfo", {
            value: () => "Info",
            writable : false,
            configurable : false
        })
        this.name = name;
    }

    speak() {
        console.log(this.name + "   make sound");
    }

    getinfo() {
        console.log(this.name)
    }
}

class Mouse extends Animal{
    constructor(name) {
        super(name)
    }

    getinfo() {
        console.log(this.name)
    }
}

class Cat extends Animal{
    constructor(name) {
        super(name)
    }
}


const mouse = new Mouse("Jerry")
const cat   = new Cat("Tom")

cat.speak();
mouse.speak();

cat.getinfo();
mouse.getinfo();

