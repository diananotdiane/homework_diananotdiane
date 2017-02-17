var show = true;

$('#doSomething').click(function(){
    if(show) {
        $('#circle').hide();
        show = false;
    } else {
        $('#circle').show();
        show = true;
    }
});

/*
$('#circle').animate({
    marginLeft: "10%"
}, 500);
*/
