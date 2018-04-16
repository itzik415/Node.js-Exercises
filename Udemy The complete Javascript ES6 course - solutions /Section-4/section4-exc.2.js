
//Exc.2
const paintings = [
    {name:'Mona lisa',width:200,height:200},
    {name:'The scream',width:400,height:600},
    {name:'The last supper',width:600,height:700}
 ]

let paintings2 = paintings.map(function(painting){
    return `The ${painting.name} is: ${painting.width} x ${painting.height}` 
})

console.log(paintings2);












