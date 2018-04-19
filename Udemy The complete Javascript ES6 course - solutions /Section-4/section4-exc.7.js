
//Exc.7
const computers = [
    {type:'Laptop',price:124, os:'Windows'},
    {type:'Desk',price:124, os:'Mac'},
    {type:'Desk',price:124, os:'Windows'},
    {type:'Laptop',price:124, os:'Mac'},
    {type:'Laptop',price:124, os:'Windows'},
];

let howMany3 = computers.reduce((sum,computer)=>{
    return computer.os === 'Mac'?{mac:sum.mac+1,windows:sum.windows}:{mac:sum.mac,windows:sum.windows+1};
},{mac:0,windows:0})

console.log(howMany3);
