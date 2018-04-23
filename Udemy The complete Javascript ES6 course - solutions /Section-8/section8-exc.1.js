
//Exc.1
const totalDistance = (...distances) => {
    let total = 0;
    totalDistance.forEach((distance) => {
        total += distance
    })
    return total;
 }
 console.log(totalDistance(200,100,200));