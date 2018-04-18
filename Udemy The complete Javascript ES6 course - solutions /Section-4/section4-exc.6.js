
//Exc.6
const trips = [
    {to:'Brazil',distance:1000},
    {to:'Chine',distance: 2500},
    {to:'India',distance: 3000}
 ]

let period = trips.reduce((dis,trip)=>{
    return dis + trip.distance;
},0) 

console.log(period);
