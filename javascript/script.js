//  Task 1: Personal Introduction 


let firstName = 'Tamim';
let lastName = 'Ahmed';
let myAge = 20;
let homeCity = 'Sylhet';
let countryName = 'Bangladesh';

console.log(
    'Hello! I am ' +
    firstName +' ' +lastName +
    '. I am ' +myAge +' years old and I live in ' +homeCity +', ' + countryName +'.'
);


// Task 2: Student Marks Calculation 


let bangla = 82;
let english = 78;
let math = 92;
let physics = 88;
let ict = 95;

let totalMarks = bangla + english + math + physics + ict;
let averageMarks = totalMarks / 5;

console.log('Total Obtained Marks: ' + totalMarks);
console.log('Average Marks: ' + averageMarks);


//  Task 3: Bill Calculation using Functions 


function getOrderBill(itemName, unitPrice, itemQty) {
    let totalAmount = unitPrice * itemQty;

    console.log('Item Name: ' + itemName);
    console.log('Unit Price: ' + unitPrice + ' BDT');
    console.log('Quantity: ' + itemQty);
    console.log('Total Payable: ' + totalAmount + ' BDT');
}




//  Task 4: Discount & Receipt Generation 


let item = 'Cricket Bat';
let itemPrice = 2500;
let count = 2;
let discountRate = 15;

let subTotal = itemPrice * count;
let discountAmount = (subTotal * discountRate) / 100;
let netPayable = subTotal - discountAmount;

function printReceipt(prodName, price, qty, total, saved, finalAmount) {
    
    console.log('Product Name: ' + prodName);
    console.log('Price per Unit: ' + price + ' BDT');
    console.log('Quantity: ' + qty);
    console.log('Subtotal: ' + total + ' BDT');
    console.log('Discount (' + discountRate + '%): -' + saved + ' BDT');
    console.log('Final Bill to Pay: ' + finalAmount + ' BDT');
}
