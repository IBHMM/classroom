function animals(name) {
    this.name = name;
} 

function dog (name, breed, sound) {
    animals.call(this, name)
    this.sound = sound;
    this.breed = breed;
}

dog.prototype = Object.create(animals.prototype);
dog.prototype.sound = function () {
    console.log(this.sound)
}
const dog1 = new dog("naizm", "bulldog")

