"use strict";

$(function() {

    $('.important').on('dblclick', function () {
        $(this).css("background-color", "salmon");
})

    $("h1").hover(
        function() {
            $(this).css('background-color', 'hotpink');
        },
        function() {
            $(this).css('background-color', 'yellow');
        }
    );

    var keyCodes = [], konamiString = "38,38,40,40,37,39,37,39,66,65";
    $(document).keydown(function(e) {
        keyCodes.push( e.keyCode );
        if (keyCodes.toString().indexOf(konamiString) >= 0){
            $(document).unbind('keydown',arguments.length);

            console.log('30 lives added');

        }
    });

});


