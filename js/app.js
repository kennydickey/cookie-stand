'use strict';
console.log('js is working');

function Shop(shopName, minCust, maxCust, averageCookies){
  this.shopName= shopName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookies = averageCookies;
  this.hourlyCookies = [];
  this.customersPerHour = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.calcCookiesPerHour = function(){
    for(var i = 0; i < times.length; i++) {
      var cookiesSold = Math.floor(this.averageCookies * this.customersPerHour());
      console.log('cookies', cookiesSold, times.length);
      this.hourlyCookies.push(cookiesSold);
      // return cookiesSold;
    }
  };
}



var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);

var Shops = [seattle, tokyo, dubai, paris, lima];
var times = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm:','1pm: ','2pm: ','3pm:','4pm:','5pm: ','6pm: ', '7pm: '];

//header created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function makeHeaderRow(){
  var salesTable = document.getElementById('shopTable');
  var newHeaderRow = document.createElement('tr');
  newHeaderRow.textContent = 'time';
  for(var i = 0; i < times.length; i++){
    var newHeader = document.createElement('th');
    newHeader.textContent = times[i];
    newHeaderRow.appendChild(newHeader);
  }
  salesTable.appendChild(newHeaderRow);
}
makeHeaderRow();
//header created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Shop.prototype.render = function(){
  var citiesTable = document.getElementById('shopTable');
  var newDataRow = document.createElement('tr');
  debugger;
  newDataRow.textContent = this.shopName;
  for(var i = 0; i < times.length; i++){
    var newData = document.createElement('td');
    newData.textContent = this.hourlyCookies[i];
    newDataRow.appendChild(newData);
  }
  citiesTable.appendChild(newDataRow);
};


for(var i = 0; i < Shops.length; i++){
  Shops[i].calcCookiesPerHour();
  Shops[i].render();
}


//title created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var shopTitle = document.getElementById('shop-holder');
shopTitle.textContent = 'My Cookie Shop';
//title created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
