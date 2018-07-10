"use strict";
(function () {

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

    function weatherUpdate(lat, lng) {

        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "13b463c1281ca485b56880c503e7f4b3",
            lat: lat,
            lon: lng,
            units: "imperial",
            main: ""
        }).done(function(data) {

            $('#temp').html("<strong>Temp: </strong> " + Math.round(data.list[0].main.temp_max) + "\xB0" + " / " + Math.round(data.list[0].main.temp_min) + "\xB0");
            $('#cloud').html("<strong>Weather: </strong> " + data.list[0].weather[0].description);
            $('#humidity').html("<strong>Humidity: </strong> " + data.list[0].main.humidity);
            $('#wind').html("<strong>Wind: </strong> " + data.list[0].wind.speed);
            $('#pressure').html("<strong> Pressure: </strong>" + data.list[0].main.pressure);

            $('#temp2').html("<strong>Temp: </strong> " + Math.round(data.list[8].main.temp_max) + "\xB0" + " / " + Math.round(data.list[0].main.temp_min) + "\xB0");
            $('#cloud2').html("<strong>Weather: </strong> " + data.list[8].weather[0].description);
            $('#humidity2').html("<strong>Humidity: </strong> " + data.list[8].main.humidity);
            $('#wind2').html("<strong>Wind: </strong> " + data.list[8].wind.speed);
            $('#pressure2').html("<strong>Pressure: </strong>" + data.list[8].main.pressure);

            $('#temp3').html("<strong>Temp: </strong> " + Math.round(data.list[16].main.temp_max) + "\xB0" + " / " + Math.round(data.list[0].main.temp_min) +  "\xB0");
            $('#cloud3').html("<strong>Weather: </strong> " + data.list[16].weather[0].description);
            $('#humidity3').html("<strong>Humidity: </strong> " + data.list[16].main.humidity);
            $('#wind3').html("<strong>Wind: </strong> " + data.list[16].wind.speed);
            $('#pressure3').html("<strong>Pressure: </strong> " + data.list[16].main.pressure);

            $('#city').html(data.city.name + ", " +data.city.country);

            var iconcode = data.list[0].weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            $('#wicon').attr('src', iconurl);

            var iconcode2 = data.list[8].weather[0].icon;
            var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
            $('#wicon2').attr('src', iconurl2);

            var iconcode3 = data.list[16].weather[0].icon;
            var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
            $('#wicon3').attr('src', iconurl3);
        });
    }
    initMap();
    weatherUpdate(lat, lng);




})();
