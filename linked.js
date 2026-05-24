/**
 * Returns the total cost of pizzas ordered by the customer
 * @author Valarmathy Murugan
 * @param {number} numPizza number of pizzas ordered by the customer
 * @returns {number} Total price of the pizza ordered by the customer
 */


function simpleCalc(numPizza) {
     
	const price1 = 6.45;   //cost of One Pizza
    const price2 = 12.00;   //cost of two Pizzas
    const price3 = 14.00;   // cost of three Pizzas
	let quotient;
	let remainder; 
    let totalPrice;

// validate  non-digit, negative or zero/empty inputs 

    if (isNaN(numPizza))
	{
		totalPrice= " ......     Oops....!   Please enter the number of Pizzas required. It cannot be characters!";
    } 
	else if (numPizza <= 0) 
	{
		totalPrice= "......     Oops....!       Zero or Negative numbers are not allowed!";
    } 
	 //calculation for  total price for pizzas greater than 3 and display of given prices for 1, 2, 3 pizzas
	else if (numPizza== 1) 
    {
      totalPrice = price1;
    }
    else if (numPizza == 2)
    {
      totalPrice = price2;
    }
    else if (numPizza== 3)
    {
      totalPrice = price3;
    }
    else  if (numPizza >= 4)          
	{
		quotient = Math.floor(numPizza/3);
		remainder = numPizza % 3;

		n1= quotient * price3 ;

		    if(remainder== 0){
			   n2 = 0;
		         }
		     else if(remainder== 1){
			   n2 = price1;
		         }
			  else if(remainder== 2)
			    {
				n2 = price2;
			     }
		totalPrice = parseFloat(n1 + n2);
	}

return totalPrice;
}

    
function checkQuantity()
{
	let message;
	//get input from the user 
	let numPizza = document.getElementById("quantity").value;
	let total = simpleCalc(numPizza);
  
	//dislay output
	 
	document.getElementById("message").innerHTML = "<b>" + " \n\n\n $" + total +"</b>";

   //prevent form submission 
     return false;
 }    

