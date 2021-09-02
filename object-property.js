var computer = {
    price : 32000,
    stotage : '500GB',
    processor : 'intel i5'
};
// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;
// console.log(computerPrice);

// set a Object property value

// computer.price = 22000;
// console.log(computer);


// different ways to set e value of an object property
var priceProperty = "price";

computer.price = 34000;
computer["price"] = 25000;
computer[priceProperty] = 23500;

// console.log(computer);



var book = {
    title : 'Study with why',
    author : 'Saimon Handy',
    price : 250,
    pages : 1200,
    publisher : 'Kajol  Brothers'
};
bookPrice = book.price;
console.log(bookPrice);