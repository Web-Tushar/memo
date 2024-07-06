let productprice = document.querySelector(".productprice");
let vatpercent = document.querySelector(".vat");
let productdiscount = document.querySelector(".productdiscount");
let discountprice = document.querySelector(".discountprice");
let totalprice = document.querySelector(".totalprice");

function addVat( price , vat) {
   const includevat = price * vat/100
   const vatWithPrice = parseInt(price + includevat);
//   console.log(incluedVat);
  return vatWithPrice

      
}



function discount ( vatWithPrice , discountAmount) {
     // make discount
     
     const makeDiscount = (vatWithPrice * discountAmount) / 100;
      return makeDiscount
}

// display korbe

function displayPrice (productPrice,vat,discountPercentage,discountPrice) {
     console.log(`product price: ${productPrice}tk.`);
     console.log(`product vat: ${vat}%`)
     console.log(`discount rate: ${discountPercentage}%`);
     console.log(`discount price: ${discountPrice}tk.`);

     productprice.innerHTML = (`${productPrice} tk.`);
     vatpercent.innerHTML= (`${vat}%`)
     productdiscount.innerHTML= (`${discountPercentage}%`)
     discountprice.innerHTML= (`${discountPrice}tk.`)
     totalprice.innerHTML= (`${vatWithPrice}tk.`)

displayPrice=(`product price:${productPrice}tk.,   vat: ${vat} tk., discount percentage:${discountPercentage}%, discount price:${discountPrice}tk.`)
console.log(displayPrice);
}

// invoke all the function

addVat(500,15)
const productPrice = 500;
const vat = 6; 
const discountPercentage = 50
const vatWithPrice  = addVat(productPrice,vat)
console.log(vatWithPrice)

const discountPrice = discount(vatWithPrice,discountPercentage)
displayPrice(productPrice,vat,discountPercentage,discountPrice)
// console.log(displayPrice)

// const {log}=  require("console");
// const fs = require("fs");

// // make a file and load some content 
// fs.writeFileSync("demo.txt", "hello world")
// fs.writeFileSync("hello.md","this is markdown file")