 
 function updateProductNumber(product, price, isIncresing){
    const productInput = document.getElementById(product +"-number");
    let productNumber = productInput.value;

    if(isIncresing==true){

     productNumber = parseInt(productNumber) +1;
    }
    else if(productNumber>0){
     productNumber = parseInt(productNumber) -1;
    }
    productInput.value = productNumber;
    //update total
    const productTotal = document.getElementById(product +"-total");
    productTotal.innerText = productNumber * price;

    //update calculate total
    calculateTotal();

 }

 function getInputValue(product){

   const productInput = document.getElementById(product +"-number");
   const productNumber = parseInt(productInput.value);
   return productNumber;
 }

 function calculateTotal(){


   //  const phoneInput = document.getElementById("phone-number");
   //  const phoneNumber = parseInt(phoneInput.value);


    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal; 
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax ;
    

    
   //  update on the html
   document.getElementById("sub-total").innerText = subTotal;
   document.getElementById("tax-amount").innerText = subTotal;
   document.getElementById("total-price").innerText = totalPrice;
   
 }



 //phone increase decrease events
   document.getElementById("phone-plus").addEventListener("click", function(){
    //    const phoneInput = document.getElementById("phone-number");
    //    const phoneNumber = phoneInput.value;
    //    phoneInput.value = parseInt(phoneNumber) + 1; 

    updateProductNumber("phone", 1219, true);
   })


   document.getElementById("phone-minus").addEventListener('click', function(){
    //    const phoneInput = document.getElementById("phone-number");
    //    const phoneNumber = phoneInput.value;
    //    phoneInput.value = parseInt(phoneNumber) -1;


    updateProductNumber("phone", 1219, false);

   })




   //  handle case increase decrease events

 document.getElementById("case-plus").addEventListener('click', function(){
    //  const caseInput = document.getElementById("case-number");
    //  const caseNumber = caseInput.value;
    //  caseInput.value = parseInt(caseNumber) +1;
    //  console.log(caseNumber);
    updateProductNumber("case",59, true);
 })

 document.getElementById("case-minus").addEventListener("click", function(){
    //  const caseInput = document.getElementById("case-number");
    //  const caseNumber = caseInput.value;
    updateProductNumber("case", 59 ,false);
    //  caseInput.value = parseInt(caseNumber) -1;
     
     
 })