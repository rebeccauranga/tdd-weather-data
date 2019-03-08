




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

const body = document.querySelector('body');
const weatherDiv = document.createElement('div');
const navElement = document.querySelector('[data-nav]');

body.appendChild(weatherDiv);

atlWeather.forEach(function(obj) {
    /** add name */
    const nameElement = document.createElement('h1');
    nameElement.textContent = obj.name;
    navElement.append(nameElement);   

    /** add temp */
    const tempElement = document.createElement('h1');
    tempElement.textContent = obj.main.temp;
    navElement.append(tempElement);

    /** add wind speed */
    const windElement = document.createElement('h1');
    windElement.textContent = obj.wind.speed;
    navElement.append(windElement);

    /** display image */
    const url = getUrlFromWeatherObject(obj);
    createImageElement(url);

    createMapElement(obj.coord);
});

function getUrlFromWeatherObject(weatherObject) {
    const [weatherItem] = weatherObject.weather;
    const { icon } = weatherItem;
    return `http://openweathermap.org/img/w/${icon}.png`
}

function createImageElement(url){
    const newIcon = document.createElement('img');
    newIcon.setAttribute('src', url);
    body.append(newIcon);
}

function createMapElement(coordinates){
    const { lon, lat } = coordinates;
    const mapSource = `http://maps.google.com/maps?q=${lon}, ${lat}&z=15&output=embed`
    const mapWidth = 360;
    const mapHeight = 270;
    const mapFrameborder = 0;
    const mapStyle = "border:0"

    const iFrameElement = document.createElement('iframe');
    iFrameElement.setAttribute('src', mapSource);
    iFrameElement.setAttribute('width', mapWidth);
    iFrameElement.setAttribute('height', mapHeight);
    iFrameElement.setAttribute('frameborder', mapFrameborder);
    iFrameElement.setAttribute('border', mapStyle);

    body.append(iFrameElement);
}


/** all of these will take an object as an argument (one element of the atlWeather array) 
 * 
*/
/** write a function that returns a new h1 element with the */


