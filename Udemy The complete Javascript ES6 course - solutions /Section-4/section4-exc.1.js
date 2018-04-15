
//Exc.1
var products = [
    {name:'Iphone',price:200},
    {name:'Motorola',price:70},
    {name:'Samsung',price:150},
    {name:'Sony',price:98},
    {name:'Windows pone',price:10}
 ];

const ul = document.querySelector('.product');
let line = '';
products.forEach(function(product){
    if(product.price < 100){
        line += `<h1> Name: ${product.name} </h1> 
                 <strong> price: ${product.price} </strong> 
                 <span>ON SALE</span>`;   
    }else {
        line += `<h1> Name: ${product.name} </h1> 
                 <strong> price: ${product.price} </strong> `;
    }
})

ul.insertAdjacentHTML('beforeend', line);

const number = [1,2,3,4,5];

const abi = number.forEach(function(number){
    return number * 10
})

console.log(abi);


