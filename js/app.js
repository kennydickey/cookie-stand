'use strict';
console.log('js is working');

var times = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm:','1pm: ','2pm: ','3pm:','4pm:','5pm: ','6pm: ', '7pm: '];


function Shop(shopName, minCust, maxCust, averageCookies){
  this.shopName= shopName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookies = averageCookies;
  this.hourlyCookies = [];
}

var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);

//this returns our random number of customers
Shop.prototype.randomCust = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

Shop.prototype.calcCookiesPerHour = function(){
  var total = 0;
  for(var i = 0; i < times.length; i++) {
    var cookiesSold = Math.floor(this.averageCookies * this.randomCust());
    this.hourlyCookies.push(cookiesSold);
    total = total + cookiesSold;
  }
  this.hourlyCookies.push(total);
};

var shops = [seattle, tokyo, dubai, paris, lima];

//header created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function makeHeaderRow(){
  var salesTable = document.getElementById('shopTable');
  var newHeaderRow = document.createElement('tr');
  var newTh = document.createElement('th');
  newTh.textContent = '';
  newHeaderRow.appendChild(newTh);
  salesTable.appendChild(newHeaderRow);
  for(var i = 0; i < times.length; i++){
    var newHeader = document.createElement('th');
    newHeader.textContent = times[i];
    newHeaderRow.appendChild(newHeader);
  }
  newTh = document.createElement('th');
  newTh.textContent = 'totals';
  newHeaderRow.appendChild(newTh);
  salesTable.appendChild(newHeaderRow);
}
makeHeaderRow();

Shop.prototype.makeShopsRows = function(){
  this.calcCookiesPerHour();
  var citiesTable = document.getElementById('shopTable');
  var newTr = document.createElement('tr');
  var newTd = document.createElement('td');
  newTd.textContent = this.shopName;
  newTr.appendChild(newTd);
  // shops[i].hourlyCookies.length
  for(var i = 0; i < this.hourlyCookies.length; i++){
    newTd = document.createElement('td');
    newTd.textContent = this.hourlyCookies[i];
    newTr.appendChild(newTd);
  }
  citiesTable.appendChild(newTr);
};

for(var i = 0; i < shops.length; i++){
  shops[i].makeShopsRows();
}

function makeFooterRow(){
  var salesTable = document.getElementById('shopTable');
  var newFooterRow = document.createElement('tfoot');
  newFooterRow.textContent = 'Hourly total';

  //add all total cookes for each hour for each city
  var grandTotal = 0;
  for(var i = 0; i < times.length; i++){
    var total = 0;
    for(var j = 0; j < shops.length; j++){
      total = total + shops[j].hourlyCookies[i];
    }
    var newTd = document.createElement('td');
    newTd.textContent = total;
    newFooterRow.appendChild(newTd);
    grandTotal = grandTotal + total;
  }
  newTd = document.createElement('td');
  newTd.textContent = grandTotal;
  newFooterRow.appendChild(newTd);
  salesTable.appendChild(newFooterRow);
}
makeFooterRow();

//title created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var shopTitle = document.getElementById('shop-holder');
shopTitle.textContent = 'My Cookie Shop';



//-----------------FORM-----------------------------------------


// take in the event parameter so that we can prevent the default
function handleFormSubmitted(event) {
  event.preventDefault();
  console.log(event);
  // actually add a new pet to our table

  // get the data about the new pet from the inputs
  var cityInput = document.getElementById('city');
  var shopName = cityInput['value'];
  var minInput = document.getElementById('min');
  var minCust = minInput.value;
  var maxInput = document.getElementById('max');
  var maxCust = maxInput.value;
  var avgInput = document.getElementById('avg');
  var averageCookies = avgInput.value;
  // use our constructor to create a new pet instance
  var newCity = new Shop(shopName, minCust, maxCust, averageCookies);
  // render that pet instance to the page
  // newCity.render();
  newCity.makeShopsRows();
  newCity.calcCookiesPerHour();
}

// set up event listener on the form
// 1. Which element?
var formElement = document.getElementById('newCities');
// 2. Which event am I listening for?
// 3. What code should run when that event happens?
formElement.addEventListener('submit', handleFormSubmitted);
