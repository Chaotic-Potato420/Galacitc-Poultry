//DOM elements
var rockOn = document.getElementById('rockOn');
var poultry = document.getElementById('poultry');
var rockTo = document.getElementById('rockTo');
var mainContent = document.getElementById('mainContent')
var body = document.getElementById('body')
var errorBox = document.getElementById('errorBox')
var errorTxt = document.getElementById('errorTxt')
errorBox.style.display = 'none'
var confirmBox = document.getElementById('confirmBox')
confirmBox.style.display = 'none'
var from = document.getElementById('from');
var bird = document.getElementById('bird')
var to = document.getElementById('to');
//math array variables
const poultryTypes = ['quail','chicken','turkey','guineafowl','mallard','pheasant','peacock','goose','partrige','swan','grouse'];
const masses = [0.21, 5.7, 19, 2.9, 2.75, 2.6, 9, 9.5, 1.1, 22, 1.2];

const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter','saturn', 'uranus', 'neptune', 'pluto'];
const escapeVelocities = [4.3, 10.4, 11.2, 5.0, 59.5, 35.5, 21.3, 23.5, 1.3];
const mercuryDistances = [31248757, 56974146, 105651744, 447648234, 849221795, 1749638696, 2760936126, 3640000000]
const venusDistances = [31248757, 25724767, 74402987, 416399477, 817973037, 1718388490, 2729685920, 3610000000]
const earthDistances = [56974146, 25724767, 48678219, 390674710, 792248270, 1692662530,2703959960, 3580000000]
const marsDistances = [105651744, 74402987, 48678219, 342012346, 743604524, 1643982054, 2655279484, 3530000000]
const jupiterDistances = [447648234, 416399477, 390674710, 342012346, 401592178, 1301969708, 2313267138, 3190000000]
const saturnDistances = [849221795, 817973037, 792248270, 743604524, 401592178, 900377530, 1911674960, 2790000000]
const uranusDistances = [1749638696, 1718388490, 1692662530, 1643982054, 1301969708, 900377530, 1011297430, 1890000000]
const neptuneDistances = [2760936126, 2729685920,2703959960, 2655279484, 2313267138, 1911674960, 1011297430, 875600000]
const plutoDistances = [3640000000, 3610000000, 3580000000, 3530000000, 3190000000, 2790000000, 1890000000, 875600000]
//CITE THIS ON THE WEBSITE
//https://theplanets.org/distances-between-planets/
//math operation variables
var ev = 0;
var d = 0;
var time = 0;
//other variables
var planetFrom = "";
var planetTo = "";
var userPoultry = "";

function submit(){
    checkForErrors()
    for(i in poultryTypes){
        if(poultry.value == poultryTypes[i]){
            userPoultry = poultryTypes[i];
        }
    }for(i in planets){
        if(rockOn.value == planets[i]){
            ev = ((escapeVelocities[i] / 1.609).toFixed(2)) * 3600
            planetFrom = planets[i]
            planets.splice(i,1)
            setDistance()
        }else if(rockTo.value == planets[i]){
            planetTo = planets[i]
        }
    }
    time = Math.round(d / ev);
    console.log("time: " + time)
    console.log("Planet from: " + planetFrom)
    console.log("Planet to: " + planetTo)
    console.log("poultry picked: " + poultry.value)
    console.log("escape velocity: " + ev)
    console.log("distance: " + d)
    sendToStorage()
    console.log("variables set in localStorage")
    if(checkForErrors() != true){
        showConfirmBox()
    }
}

function checkForErrors(){
    if(rockOn.value == "select"){
        console.log("ERROR on rockOn")
        errorTxt.innerHTML = "Please choose a space rock to throw your poultry from!"
        showErrorBox()
        return true;
    }
    if(rockTo.value == "select"){
        console.log("ERROR on rockTo")
        errorTxt.innerHTML = "Please choose a kind of poultry to throw!"
        showErrorBox()
        return true;
    }
    if(poultry.value == "select"){
        console.log("ERROR on poultry")
        errorTxt.innerHTML = "Please choose a space rock to throw your poultry to!"
        showErrorBox()
        return true;
    }
    if(rockOn.value == "select" && poultry.value == "select"){
        errorTxt.innerHTML = "Please choose a space rock to throw your poultry from and what kind of poultry you would like to throw!"
        showErrorBox()
        return true;
    }
    if(rockOn.value == "select" && rockTo.value == "select"){
        errorTxt.innerHTML = "Please choose a space rock to throw your poultry to and from!"
        showErrorBox()
        return true;
    }
    if(poultry.value == "select" && rockTo.value == "select"){
        errorTxt.innerHTML = "Please choose a space rock to throw your poultry to and what kind of poultry you would like to throw!"
        showErrorBox()
        return true;
    }
    if(poultry.value == "select" && rockOn.value == "select" && rockTo.value == "select"){
        console.log('error with more than one field')
        errorTxt.innerHTML = "Please choose the space rock you want to throw from, throw to, and the kind of poultry you want to throw!"
        showErrorBox()
        return true;
    }
}

function showErrorBox(){
    errorBox.style.display = "block"
    body.classList.add('bg-dark-subtle')
    rockOn.classList.add('bg-dark-subtle')
    rockTo.classList.add('bg-dark-subtle')
    poultry.classList.add('bg-dark-subtle')
}

function showConfirmBox(){
    confirmBox.style.display = "block"
    body.classList.add('bg-dark-subtle')
    rockOn.classList.add('bg-dark-subtle')
    rockTo.classList.add('bg-dark-subtle')
    poultry.classList.add('bg-dark-subtle')
    document.getElementById('subBtn').classList.add('bg-dark-subtle')
    from.innerHTML = rockOn.value;
    bird.innerHTML = poultry.value;
    to.innerHTML = rockTo.value;
}

function dismissError(){
    errorBox.style.display = "none"
    body.classList.remove('bg-dark-subtle')
    rockOn.classList.remove('bg-dark-subtle')
    rockTo.classList.remove('bg-dark-subtle')
    poultry.classList.remove('bg-dark-subtle')
}

function confirm(){
    window.location.replace('results.html')
}

function setDistance(){
    if(rockOn.value == 'mercury'){
        for(j in planets){
            if(rockTo.value == planets[j]){
                d = mercuryDistances[j];
            }
        }
    }else if(planetFrom == 'venus'){
        for(j in planets){
            if(rockTo.value == planets[j]){
                d = venusDistances[j];
            }
        }
    }else if(planetFrom == 'earth'){
        for(j in planets){
            if(rockTo.value == planets[j]){
                d = earthDistances[j];
            }
        }
    }else if(planetFrom == 'mars'){
        for(j in planets){
            if(rockTo.value == planets[j]){
                d = marsDistances[j];
            }
        }
    }else if(planetFrom == 'jupiter'){
        for(j in planets){
            if(rockTo.value == planets[j]){
                d = jupiterDistances[j];
            }
        }
    }else if(planetFrom == 'saturn'){
        for(j in planets){
            if(rockTo.value == planets[j]){
                d = saturnDistances[j];
            }
        }
    }else if(planetFrom == 'uranus'){
        for(j in planets){
            if(rockTo.value == planets[j]){
                d = uranusDistances[j];
            }
        }
    }else if(planetFrom == 'neptune'){
        for(j in planets){
            if(rockTo.value == planets[j]){
                d = neptuneDistances[j];
            }
        }
    }else if(planetFrom == 'pluto'){
        for(j in planets){
            if(rockTo.value == planets[j]){
                d = plutoDistances[j];
            }
        }
    }
}

function sendToStorage(){
    localStorage.setItem('time', time)
    localStorage.setItem('ev', ev)
    localStorage.setItem('planetFrom', planetFrom);
    localStorage.setItem('planetTo', planetTo)
    localStorage.setItem('userPoultry', userPoultry)
}