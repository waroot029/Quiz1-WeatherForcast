$(function () {
    $("#getcountry").click(function (e) {
        e.preventDefault();
        $("#showcountry").empty();
        var country = $("#country").val();
        var d = new Date();
        var date = d.toDateString();
        var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + country + "&appid=f8bba49602d2cdc403770a1c40afe219";
        $.get(urlApi, function (data) {
            var weathercheck = data.weather[0].main;
            if (weathercheck == "Clouds") {
                var pictureweather =  "<div class='icon sun-shower'><div class='cloud'></div><div class='sun'><div class='rays'></div></div>";
            }
            if (weathercheck == "Rain") {
                var pictureweather =   "<div class='icon rainy'><div class='cloud'></div><div class='rain'></div></div>";
            }
            if (weathercheck == "Clear") {
                var pictureweather = "<div class='icon sunny'><div class='sun'><div class='rays'></div></div>";
            }
            if (weathercheck == "Thunderstorm") {
                var pictureweather =   "<div class='icon thunder-stom'><div class='cloud'><div class='lightning'><div class='bolt'><div class='bolt'></div></div>";
            }
            if (weathercheck == "Mist") {
                var pictureweather =   "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div><div class='cloud'></div><div class='cloud'></div></div>";
            }
            console.log(data);
            var showdetail =
"<table align = 'center'><tr><td><img class = 'pic' src='img/location.png'>" + country + " &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp; </td><td><h4><img class = 'pic' src='img/date.png'>" + date + "</h4></td></tr></table> <br>"  +
"<center>" + pictureweather + "</center>" +
"<table align = 'center'><tr><td width = '100%'><p id = 'text'><b>" + data.weather[0].description +
"<b></p></td></tr></table>" + "<table align= 'center'>" + "<tr><td><img src='img/Celsius.png' alt=''></td><td>" + ((data.main.temp) / 10).toFixed(2) +
" °C</td></tr>" + "<tr><td><img src='img/Pressure.png' alt=''></td><td>" + data.main.pressure +
" hPa</td></tr>" + "<tr><td><img src='img/humidity.png' alt=''></td><td>" + data.main.humidity + "%";
            $("#showcountry").append(showdetail);
        });
    });
});
