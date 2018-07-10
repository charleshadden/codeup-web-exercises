(function() {
    "use strict";

    $('#ranQuote').click(function() {
        $.ajax("http://quotes.stormconsultancy.co.uk/random.json").done(function(data) {

            function getQuote(data) {
                var output = '';
                output += "<h3>" + data.author + "</h3>";
                output += "<h4>" + data.quote + "</h4>";
                $('#message').html(output);
            }
            $('#message').css('background-color','cyan');
            console.log(getQuote(data));
        });
    });

    $('#ranJoke').click(function() {
        $.ajax("http://api.icndb.com/jokes/random").done(function(data) {

            function getJoke(data) {
                var output = '';
                output += "<h4 id='yeah'>" + data.value.joke + "</h4>";
                $('#message').html(output);
            }
            console.log(getJoke(data));
            $('#message').css('background-color','red');
        }) ;
    });

})();