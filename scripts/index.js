




// Implement the following functions to fulfill the tests!
function getLocationName() {}
function getLocationCountry() {}
function getLocationLatitude() {}
function getLocationLongitude() {}
function getDescription() {}
function getWindSpeed() {}
function getSunrise() {}


// Please ignore the following
try {
    module.exports = {
        getLocationName,
        getLocationCountry,
        getLocationLatitude,
        getLocationLongitude,
        getDescription,
        getWindSpeed,
        getSunrise
    }
} catch (e) {
    
}

function getLocationName(weather) {
    return weather.name;
}

const weatherDiv = document.createElement('div');
// weatherDiv.textContent = "Testing 123";
console.log(weatherDiv);

const body = document.querySelector('body');
body.appendChild(weatherDiv);


const navElement = document.querySelector('[data-nav]');
atlWeather.forEach(function(obj) {
    const newHeading = document.createElement('h1');
    newHeading.textContent = obj.name;
    newHeading.setAttribute('h1', obj.name);
    navElement.append(newHeading);    
});

atlWeather.forEach(function(obj) {
    const newHeading = document.createElement('h1');
    newHeading.textContent = obj.main.temp;
    newHeading.setAttribute('h1', obj.main.temp);
    navElement.append(newHeading);
});

atlWeather.forEach(function(obj) {
    const newHeading = document.createElement('h1');
    newHeading.textContent = obj.wind.speed;
    newHeading.setAttribute('h1', obj.wind.speed);
    navElement.append(newHeading);
});

function getWeatherUrl(weather){

    return iconURL;
}

function showIcon(url){

}




