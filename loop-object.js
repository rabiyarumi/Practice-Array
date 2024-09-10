// Module-10_9
// loop an object
const mobile ={
    brand: "samsung",
    price: 80000,
    color: 'black',
    isNew: true
}
//Loop way-1
console.log(mobile);
for (const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}
//Loop way-2
const keys = Object.keys(mobile);
console.log(keys)
for(const key of keys){
    console.log(key,':',  mobile[key]);
}