//run homepage banners
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1} 
        x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 3000); // 2000 Change image every 2 seconds
};

var images = [
    'card-hero.jpg',
    'card-bday-happiest.jpg',
    'card-bday-happy8.jpg',
    'card-bday-happy2.jpg',
    'card-bday-happy3.jpg',
    'card-bday-happy4.jpg',
    'card-bday-happy5.jpg',
    'card-bday-happy6.jpg',
    'card-bday-happy7.jpg',
];
var products = [
    'Thank You',
    'Happiest of Birthdays',
    'YAY! You\'re Six',
    'A Princess and Her Castle',
    'My Heart',
    'Star Birthday',
    'Lots of Dots Birthday',
    'Birthday Castle',
    'A Knight\'s Birthday',
];
var prices = [
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9
];
var cart = [];
var total = 0;


$(function(){

    function currencyFormat(number)
    { 
        currency = "$" + number.toFixed(2);
        return currency;
    };

    function addProducts(){
        //add products to the shop
        for(var i = 0; i < products.length; i++)
        {
            var string = "";

            string +='<div class="col-xs-12 col-sm-6 col-md-4">';
            string +='  <div class="product">';

            var image = images[i] || 'product.png';
            string +='      <img class="img-fluid img-responsive" src="images/' + images[i] + '"/>';
            string +='      <h3>'
            string +='      <span id="cardName">' + products[i] + '</span>,';
            string +='      <span id="price">' + currencyFormat(prices[i]) + '</span>';
            string +='      </h3>';
            string +='      <button class="btn btn-sm cart-btn" value=' + i + '>Add to Cart</button>';
            string +='  </div>';
            string +='</div>';

            $('#products').append(string);

            //set the cart counter to 0 for that this index
            cart.push(0);
        };
    };
    
    function addtoCart(){
        //Add product to cart
        $('#products').on('click', '.btn', function(button){
            var i = $(this).val();
            var quantity = 1;
            var price = prices[i];

            //Add quantity to cart
            cart[i] = cart[i] + quantity;

            //Add (quantity * price) to total
            total = total + (quantity * price);

            console.log(total, cart);
        });
    };

    function viewinCart(){
        //View cart event
        $('#viewCart').on('click', function(){
            //Clear the cart
            $('#cartContents').html('');

            //Build the cart
            for(var i = 0; i < products.length; i++)
            {
                var count = cart[i];
                var price = prices[i];
                var cost = currencyFormat(count * price);
                var grandTotal = currencyFormat(total);

                if(count > 0) {
                    var string = "";
                    string += '<li class="list-group-item clearfix">';
                    string += '<img class="cart-image" src="images/' + images[i] + '"/>';
                    string += '<span class="badge badge-pill badge-primary">' + count + ' @ ' + cost + '</span>';
                    string += products[i];
                    string += '</li>';
                    $('#cartContents').append(string);
                    $('#grandTot').html(grandTotal);
                    $('#grandCheckout').html(grandTotal);
                }
            }
        });
    };

    function checkoutModal(){
        //Checkout
        $('#checkout').on('click', function(){
            console.log("Checking out");
            $('#checkoutModal').modal();
            var customName = $('#entered').val();
            $('#entered').val('');
        });

        $('.nav a').on('click', function(){
            var _opened = $(".navbar-collapse").hasClass("collapse in");
            if (_opened === true) {
                $('.navbar-toggle').click();
            }
        });
    };




    // Functions to call
    addProducts();
    addtoCart();
    viewinCart();
    checkoutModal();



$(document).ready(function(){ 
    $('#characterLeft').text('250 characters left');
    $('#message').keydown(function () {
        var max = 250;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
});


});
