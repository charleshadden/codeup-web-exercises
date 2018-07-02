"use strict";



$(function() {

    var keyCodes = [], keyString = "38,38,40,40,37,39,37,39,66,65,13";
    $(document).keyup(function (e) {
        keyCodes.push(e.keyCode);
        if (keyCodes.toString().indexOf(keyString) >= 0) {
            $(document).off('keyup');
            $(document).ready(function(e) {
                var width = "+=" + $(document).width();
                $(".ship").animate({
                    right: width
                }, 10000, function() {
                    $(".ship").css("display", "none");
                });
            });

            $(document).ready(function(e) {
                var width = "+=" + $(document).width();
                $(".dinoBird2").animate({
                    left: width
                }, 8000, function() {
                    $(".dinoBird2").css("display", "none");
                });
            });
            }
            })
});
