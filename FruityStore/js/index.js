$(function(){

    

    var products    = ['Dragonfruit', 'Durian', 'Guava', 'Kiwi', 'Star Fruit', 'Melon', 'Ramboutan', 'Lychee' ];
    var details     = ['from Hawaii', 'from Malaysia', 'from Brazil', 'from New Zealand', 'from Mexico', 'from Indonesia', 'from Vietnam', 'from Thailand'];
    var prices      = [1.25, 2.25, 3.25, 4.25, 5.25, 6.25, 7.25, 8.25];
    var images      = ['DragonFruit.png', 'Durian.png', 'Guava.png', 'Kiwi.png', 'StarFruit.png', 'TuscanMelon.png', 'Ramboutan.png', 'Lychee.png' ]
    var cart = [];

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var string = "";

        string += '<div class="col-xs-3">';
        string += '<div class="product">';

        var image = images[i] || 'default.jpg';
        string +='      <img class="img-thumbnail" src="./images/' + image + '"/>';

        string +='      <div class="title">' + products[i] + '</div>';
        string +='      <div class="details">' + details[i] + '</div>';
        string +='      <div class="price">' + currencyFormat(prices[i]) + '</div>';
        string +='      <div class="quantity">Quantity';
        string +=           buildSelect(i);
        string +='      </div>';
        string +='      <button class="btn btn-success" value=' + i + '>Add to Cart</button>';
        string +='  </div>';
        string +='</div>';

        $('#products').append(string);

        //Set the cart counter to 0 for that this index
        cart.push(0);
    }

    //Add product event
    $('#products').on('click', '.btn', function(button){
        var index = $(this).val();
        cart[index]++;
        console.log(cart);
    });

    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cart[i];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';

                $('#cartContents').append(string);
            }
        }
    });

    //Checkout
    $('#checkout').on('click', function(){
        console.log("Checking out");
        $('#checkoutModal').modal();
    });

    $('.nav a').on('click', function(){
        var _opened = $(".navbar-collapse").hasClass("collapse in");
        if (_opened === true) {
            $('.navbar-toggle').click();
        }
    });

});

function buildSelect(index)
{
    var string = '';
    
    return string;
}

function currencyFormat(number)
{ 
    currency = "$" + number.toFixed(2);
    return currency;
}
