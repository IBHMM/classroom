

Array.prototype.custommap = function (callback) {
    const mappedarray = [];
    for(let i = 0; i < this.length; i++) {
        mappedarray.push(callback(this[i], i, this))
    }
    return mappedarray;
}

Array.prototype.customereverse = function () {
    let left = 0;
    let right = this.length - 1;

    if (right === 1) {
        const temp = this[left];
        this[left] = this[right];
        this[right] = temp;
    } else {
        while (left < right) {
            const temp = this[left];
            this[left] = this[right];
            this[right] = temp;
            left++;
            right--;
        }
    }

    return this;
}


const newarray = [1,2,3,4,5].custommap((element) => 
    element * 2
)

const reverse = [1,2].customereverse()

console.log(newarray)
console.log(reverse)
