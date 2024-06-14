class circle {

    constructor (radius) {
        this.rad = radius;
    }

    get radius () {
        return this.rad;
    }    

    set radius (radius) {
        if (radius >= 0) {
            this.rad = radius;
        }else {
            throw new Error("Can not assign radius to negative value");
        }
    }
    
    caculatearea () {
        return this.rad * this.rad * 3.14159;
    }
}


console.log(typeof(Error))