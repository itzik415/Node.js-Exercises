
//Exc.1
const names= ["James","Ron","Lisa","Tommy"];
const randomName = items => items[Math.floor(Math.random()*items.length)];
const randomNumber = (maxNumber,minNumber) => Math.floor(Math.random() * maxNumber) + minNumber;

console.log(`${randomName(names)} magic number is ${randomNumber(5,2)}`)
