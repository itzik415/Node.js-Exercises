
//Exc.3
const cars = [
    {name:'Ford',price:200},
    {name:'Nissan',price:400},
    {name:'Nissan',price:600}
]

let message = cars.map(function(car){
    return `${car.name} is ${car.price * 3.5} Shekel`
})

console.log(message)













