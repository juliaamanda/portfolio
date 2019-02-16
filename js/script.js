$( document ).ready(function() {
    console.log( "ready!" );

    $( ".photo" ).each(function() {
    	$(this).on("contextmenu", function () {
    		return false;
    	})
    });
});