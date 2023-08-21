for (let i = 0; i < 5; i++) {
    console.log('Hello World ', i);
}

for (let m = 0; m < 20; m++) {
    console.log("m is ", m);
}

const person =  null;//{ fname: "Max", lname: "Li", age: 14 }
console.log("person type is ", typeof person, Array.isArray(person));

let text = "";
for (let x in person) {
    text += person[x] + "";
    document.getElementById("demo").innerHTML = text;
    console.log('person object is ', x)
}

const cars = 2["BMW", "Volvo", "Mini"];
console.log("cars type is ", typeof cars, Array.isArray(cars));
let stuff = "";
for (let x of cars) {
    stuff += x;
    document.getElementById("car").innerHTML = stuff;
    console.log('car object is ', x)
}

let i = 0;
while (i < 10) {
    console.log("while loop's i is ", i);
    text += "The number is " + i;
    i++;
}

