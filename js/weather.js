"use strict";
(function () {

//===========jquery styling========\\

    $('.box').hover(function() {
        $(this).css('font-style','italic');
    }, (function() {
        $(this).css('font-style','normal')
    }));

    $('#nightmode').hover(function() {
        $(this).css('background-color','black');
        $(this).css('color','white')
    }, (function() {
        $(this).css('background-color','white');
        $(this).css('color','black')
    }));

    $('#daymode').hover(function() {
        $(this).css('background-color','white');
        $(this).css('color','black')
    }, (function() {
        $(this).css('background-color','black');
        $(this).css('color','white')
    }));

//==========daymode map=========\\

    var map;
    var lat = 29.4241;
    var lng = -98.4936;

    function initMap() {

        var myLatLng = {lat: lat, lng: lng};

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: myLatLng

        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            label: 'Drag',
            draggable: true
        });

        marker.addListener('mouseup', function() {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            myLatLng.lat = lat;
            myLatLng.lng = lng;
            weatherUpdate(lat, lng);
        });
    }

//=========nightmode map========\\

    $('#nightmode').click(function() {
        $('#nightmode').hide();
        $('#daymode').show();
        $('#map').toggle().hide();
        $('#map2').toggle().show();
        $('body').css('background-color','black', 'color','white');
        $('h1').css('color','white');
        $('#city').css('color','white');
        $('.box').css('background-color','black');
        $('.box').css('color','white');
        $('.box').css('border','2px solid white');

        initMap2()
    });

//=========daymode=========\\

    $('#daymode').click(function(){
        $('#nightmode').show();
        $('#daymode').hide();
        $('#map').toggle().show();
        $('#map2').toggle().hide();
        $('body').css('background-color','antiquewhite', 'color','black');
        $('h1').css('color','black');
        $('#city').css('color','black');
        $('.box').css('background-color','#cbffcd');
        $('.box').css('color','black');
        $('.box').css('border','2px solid black');
        $('#map').css('border', '2px solid black');

        initMap()
    });

    initMap2();

//============nightmode map==========\\

    function initMap2() {

        var myLatLng = {lat: lat, lng: lng};

        map = new google.maps.Map(document.getElementById('map2'), {
            zoom: 3,
            center: myLatLng,
            styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                }
            ]

        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            draggable: true
        });

        marker.addListener('mouseup', function() {
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();
            myLatLng.lat = lat;
            myLatLng.lng = lng;
            weatherUpdate(lat, lng);
        });
    }

//===============updates weather based on movement of marker=======\\

    function weatherUpdate(lat, lng) {

        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "13b463c1281ca485b56880c503e7f4b3",
            lat: lat,
            lon: lng,
            units: "imperial",
            main: ""
        }).done(function(data) {
            console.log(data);

//================generates data==============\\

            function buildList1(data) {
                var output = "";

                output += "<h4>" + 'Today'  +"</h4>";
                output += "<p>" + "<strong> Temp: </strong>" +  Math.round(data.list[0].main.temp_max) + "\xB0" + " / " + Math.round(data.list[0].main.temp_min) +"\xB0"+ "</p>";
                output += "<p>" + "<img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png'>" + "</p>";
                output += "<p>" + "<strong> Weather: </strong>" + data.list[0].weather[0].description + "</p>";
                output += "<p>" + "<strong> Humidity: </strong>" + data.list[0].main.humidity + "</p>";
                output += "<p>" + "<strong> Wind: </strong>" + data.list[0].wind.speed + "</p>";
                output += "<p>" + "<strong> Pressure: </strong>" + data.list[0].main.pressure; + "</p>";

                return output;
            }
            $('#day1').html(buildList1(data));

            function buildList2(data) {
                var output = "";

                output += "<h4>" + 'Tomorrow'  +"</h4>";
                output += "<p>" + "<strong> Temp: </strong>" +  Math.round(data.list[8].main.temp_max) + "\xB0" + " / " + Math.round(data.list[8].main.temp_min) +"\xB0"+ "</p>";
                output += "<p>" + "<img class ='bounce' src='http://openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png'>" + "</p>";
                output += "<p>" + "<strong> Weather: </strong>" + data.list[8].weather[0].description + "</p>";
                output += "<p>" + "<strong> Humidity: </strong>" + data.list[8].main.humidity + "</p>";
                output += "<p>" + "<strong> Wind: </strong>" + data.list[8].wind.speed + "</p>";
                output += "<p>" + "<strong> Pressure: </strong>" + data.list[8].main.pressure + "</p>";

                return output;
            }
            $('#day2').html(buildList2(data));

            function buildList3(data) {
                var output = "";

                output += "<h4>" + 'Tomorrow'  +"</h4>";
                output += "<p>" + "<strong> Temp: </strong>" +  Math.round(data.list[16].main.temp_max) + "\xB0" + " / " + Math.round(data.list[16].main.temp_min) +"\xB0"+ "</p>";
                output += "<p>" + "<img src='http://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png'>"+ "</p>";
                output += "<p>" + "<strong> Weather: </strong>" + data.list[16].weather[0].description + "</p>";
                output += "<p>" + "<strong> Humidity: </strong>" + data.list[16].main.humidity + "</p>";
                output += "<p>" + "<strong> Wind: </strong>" + data.list[16].wind.speed + "</p>";
                output += "<p>" + "<strong> Pressure: </strong>" + data.list[16].main.pressure + "</p>";

                return output;
            }
            $('#day3').html(buildList3(data));

            $('#city').html(data.city.name + ", " + data.city.country);

        });
    }

    initMap();
    weatherUpdate(lat, lng);




})();
