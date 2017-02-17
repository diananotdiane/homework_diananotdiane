var show = true;

/*
$('#doSomething').click(function(){
    if(show) {
        $('#circle').hide();
        show = false;
    } else {
        $('#circle').show();
        show = true;
    }
});
*/

$('#rightButton').click(function(){
    $('#circle').animate({
    	marginLeft: "95%"
	}, 500);
});

$('#leftButton').click(function(){
    $('#circle').animate({
    	marginLeft: "0%"
	}, 500);
});

$('#downButton').click(function(){
    $('#circle').animate({
    	marginTop: "50%"
	}, 500);
});

$('#upButton').click(function(){
    $('#circle').animate({
    	marginTop: "0%"
	}, 500);
});

/*
$('#circle').animate({
    marginLeft: "10%"
}, 500);
*/
