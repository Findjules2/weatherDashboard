var APIKey = "01190793a82b7e7c0ac714309cf04997"

$("#citySearch").on("click", function (event) {
    event.preventDefault()

    var city = $("#search").val()
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        var icon = response.weather[0].icon
        var iconLink = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        
        console.log(iconLink)
        var card = $("<div class='card'>")
        var cardBody = $("<div class='card-body'>")
        console.log(cardBody)
        var cardTitle = $("<div class='card-title'>")
        var cardIcon = $("<img src='" + iconLink + "'>")
        var cardTemp = $("<p class='temp'>")
        var cardHumidity = $("<p class='humidity'>")
        var cardWind = $("<p class='wind'>")
        
        
        cardTitle.text(response.name + "          " + moment().format("(MMM Do, YYYY)") )
        cardTitle.append(cardIcon)
        var fTemp = (response.main.temp)
        cardTemp.html("Temperature: " + fTemp.toFixed(0) + "&deg;")
        cardHumidity.text("Humidity: " + response.main.humidity + "%")
        cardWind.text("Wind speed: " + response.wind.speed + " mph")
        cardBody.append(cardTitle, cardTemp, cardHumidity, cardWind)
        card.append(cardBody)
        $(".cardHolder").prepend(card)
    })
})
