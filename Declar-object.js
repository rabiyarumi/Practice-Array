//---Ways to declare an Object---\\
//type-1
console.log("Declaration type-1:-")
const mobile ={
    brand: "samsung",
    price: 80000,
    color: 'black',
    isNew: true
}
console.log(mobile);
// type-2
console.log("Declaration type-2:-")
const pencil = new Object();
console.log(pencil)
// type-3
console.log("Declaration type-3:-")
const rubber = Object.create({});
console.log(rubber);
