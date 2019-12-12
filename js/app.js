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
//header created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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


// for(var i = 0; i < Shops.length; i++){
//   // Shops[i].calcCookiesPerHour();
//   Shops[i].render();
// }

function makeFooterRow(){
  var salesTable = document.getElementById('shopTable');
  var newFooterRow = document.createElement('tfoot');
  newFooterRow.textContent = 'Hourly total';
  var total = 0;
  //add all total cookes for each hour for each city
  for(var i = 0; i < times.length; i++){
    for(var j = 0; j < shops.length; j++){
      total = total + shops[j].hourlyCookies[i];
    }
    var newTd = document.createElement('td');
    newTd.textContent = total;
    newFooterRow.appendChild(newTd);
  }
  salesTable.appendChild(newFooterRow);
}
makeFooterRow();


//title created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var shopTitle = document.getElementById('shop-holder');
shopTitle.textContent = 'My Cookie Shop';
//title created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
