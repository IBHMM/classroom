// function myTag(strings, ...value) {
//     console.log(strings);
//     console.log(value)
// }


// const name_ = "ibrahim";
// age = 18;

// myTag`My name is ${name_} i am ${age} years old`

// task

function Takeinfo(strings, ...value) {
    return [strings, value];
}

let info = Takeinfo`${"Hello"} my name is ${"ibrahim"} surname is ${"muradov"} ${"murad"} ${"fsfda"}`;

let newstring = "";
index = 0;

while(info[0].length > 0 || info[1].length > 0) {
    if (index > info[0].length && index > info[1].length) {
        break;
    }
    if (info[0][index] != undefined) {
        newstring += info[0][index]
    }
    if (info[1][index] != undefined) {
        newstring += info[1][index].toUpperCase();
    }
    index += 1;
}

console.log(newstring)