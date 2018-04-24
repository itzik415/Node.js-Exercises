
//Exc.2
let showItems= (arg1,...arg2) => {
   let newArray = [...arg1,...arg2]; 
   console.log(newArray)
}

showItems(["dogs","cats"],"turtles","sharks");
