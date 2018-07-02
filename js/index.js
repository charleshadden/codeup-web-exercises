"use strict";
console.log('hello');

$(function() {

    var $blue = $('#blue-light');
    var $green = $('#green-light');
    var $yellow = $('#yellow-light');
    var $red = $('#red-light');

//==============RoundCount==================\\
    $('.roundCounter').click(function () {
        $('.roundCounter').text('Round ' + roundCount);
        console.log('click');
    });

//==============Random Generator=================\\
    $('#start').click(function () {

        roundCheck = [];
        var roundCount = 6;


        var roundCheck = [];



        setTimeout(function () {


            for (var i = 0; i < roundCount; i++) {

                var random = Math.floor((Math.random() * 4) + 1);
                roundCheck.push(random);

                console.log(roundCheck);

                if (random === 1) {
                    $blue.animate({opacity: 10}, 1000).delay(500).animate({opacity: 0.5});
                }
                if (random === 2) {
                    $green.animate({opacity: 10}, 1000).delay(500).animate({opacity: 0.5});
                }
                if (random === 3) {
                    $red.animate({opacity: 10}, 1000).delay(500).animate({opacity: 0.5});
                }
                if (random === 4) {
                    $yellow.animate({opacity: 10}, 1000).delay(500).animate({opacity: 0.5});
                }
            }
//================Light up on CLick==================\\
            $blue.click(function(){
                $blue.animate({opacity: 10}, 1000).delay(500).animate({opacity: 0.5});
            });
            $green.click(function(){
                $green.animate({opacity: 10}, 1000).delay(500).animate({opacity: 0.5});
            });
            $red.click(function(){
                $red.animate({opacity: 10}, 1000).delay(500).animate({opacity: 0.5});
            });
            $yellow.click(function(){
                $yellow.animate({opacity: 10}, 1000).delay(500).animate({opacity: 0.5});
            });
        });
    });
});




