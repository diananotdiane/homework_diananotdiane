/* global $ */
/*
Goal: get this shopping cart working!
- load the correct products into the <select>
- when the 'Add to Cart' button is clicked it should add the item to the shopping cart
- the receipt should show the correct price for each item in the shopping cart
- the receipt should have the correct total for all the items in the shopping cart

Bonus:
- Create your own products
- Add a description of each item in the shopping cart
- List the product next to the price in the receipt
- Have the shopping cart list each product once with the number of that item in the cart
For example:
apple 3

instead of:
apple
apple
apple
Hint: you'll need array like var arrCount = [0, 0, 0]
*/

$(function () {
  /// ------------------------------------
  /// Define stuff
  /// ------------------------------------

  //Declare and assign global variables
  var total = 0;
  var arrProductNames = ['apple', 'orange', 'banana'];
  var arrPrices = ['1.25', '2.15', '.75'];
  var arrQuantities = [0, 0, 0]


	function addProductsToSelect(namesArray) {
		for (var index = 0; index < namesArray.length; index++) {
		var name = namesArray[index];
		$('#selectProduct').append('<option class="list-group-item" value=' + index + '>' + name + '</option>');
		}
	}

	function onSubmit(submitEvent) {
		//Prevent the form from submitting
		submitEvent.preventDefault();

		//Declare and assign local variables
		var productIndex = $('#selectProduct').val();

		//If the blank option is selected, do nothing
		if (!productIndex) {
		 return
		} 

		//Show what is selected
		console.log('Index of the selected product is: ' + productIndex);

		//Assign new values
		var name = arrProductNames[productIndex];
		console.log('Product selected is: ' + name);

		var price = getPrice(productIndex, arrPrices);
		console.log('Price of product selected is: ' + price);
		total = total + price;

		//Call the function that updates the DOM
		updatePage(name, price);
	}

	function trackQuantities(index, arrQuantities) {
		//Hmmm how to approach
	}

	function getPrice(index, arrPrices) {
		var itemCost = '';
		if (!arrPrices[index]) {
		console.log('you gotta give me an valid index!');
		} else {
		itemCost = arrPrices[index];
		}
		return parseFloat(itemCost);
	}

	function currencyFormat(numberValue) {
		return '$' + numberValue.toFixed(2);
	}

	function updatePage(name, price) {
		var formattedCost = currencyFormat(price);
		var formattedTotal = currencyFormat(total);

		//Update the DOM
		$('#cart').append('<div class="col-xs-12">' + name + '</div>');
		$('#itemRow').append('<div class="col-xs-8">'+ name + '</div> <div class="col-xs-4"> <div id="itemRow" class="pull-right">' +  formattedCost + '</div> </div>');
		$('#entry').val('');
		$('#total').html(formattedTotal); 
	}

	/// ------------------------------------
	/// Do Stuff
	/// ------------------------------------

	// Functions to call
	addProductsToSelect(arrProductNames);

	//Event Handler
	$('#products').submit(onSubmit);

});
