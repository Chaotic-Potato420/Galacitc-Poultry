//localStorage variables
var time = localStorage.getItem('time');
var ev = localStorage.getItem('ev');
var planetFrom = localStorage.getItem('planetFrom');
var planetTo = localStorage.getItem('planetTo');
var poultry = localStorage.getItem('poultry');
//DOM element variables
var insertTime = document.getElementById('insertTime');
var insertPoultry = document.getElementById('insertPoultry');
var insertPlanetTo = document.getElementById('insertPlanetTo');

insertTime.innerHTML = time.toString();
insertPoultry.innerHTML = poultry;
insertPlanetTo.innerHTML = planetTo;

var element = document.getElementById('report');

document.getElementById('share').addEventListener('click',function(){
    html2pdf(element)
})