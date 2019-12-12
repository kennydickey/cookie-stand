'use strict';
console.log('js is working');


// //my time iteration * save in case we want to use this
// // var amTime = 6;
// // for(var i = 0; i < 6; i++){
// //   console.log((amTime++) + 'am');
// // }
// // var pmTime = [12, 1, 2, 3, 4, 5, 6];
// // for(var j=0; j < 6; j++){
// //   console.log((pmTime)[j] + 'pm');
// // }

// // var addTime = document.getElementById('2ndtd');
// // addTime.textContent = amTime;

// // var times = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm:','1pm: ','2pm: ','3pm:','4pm:','5pm: ','6pm: '];

// // var timesActual = 1
// // var timeLoop = function(){
// //   for(var i = 0; i < 12; i++){

// //   }



// //find the product of average cookies per person * people per hour
// var cookiesPerHourCalc = function(){
//   var perHour = (this.avgCookiesPerCust * this.averageCust());
//   console.log(perHour);
//   return perHour;
// };
// //find average custome count per hour
// var averageCustCalc = function(){
//   var randomCalc = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   console.log(randomCalc);
//   return randomCalc;
// };

// var seattle = {
//   minCust : 23,
//   maxCust : 65,
//   avgCookiesPerCust : 6.5,
//   //average customer moved to a var
//   averageCust : averageCustCalc,
//   //average customer times fixed cookies per hour average moved to a var
//   cookiesPerHour : cookiesPerHourCalc
// };
// var tokyo = {
//   //hourly customers
//   minCust : 3,
//   maxCust : 24,
//   avgCookiesPerCust : 1.2,
//   averageCust : averageCustCalc,
//   cookiesPerHour : cookiesPerHourCalc
// };
// var dubai = {
//   //hourly customers
//   minCust : 11,
//   maxCust : 38,
//   avgCookiesPerCust : 3.7,
//   averageCust : averageCustCalc,
//   cookiesPerHour : cookiesPerHourCalc
// };
// var paris = {
//   //hourly customers
//   minCust : 20,
//   maxCust : 38,
//   avgCookiesPerCust : 2.3,
//   averageCust : averageCustCalc,
//   cookiesPerHour : cookiesPerHourCalc
// };
// var lima ={
//   //hourly customers
//   minCust : 2,
//   maxCust : 16,
//   avgCookiesPerCust : 4.6,
//   averageCust : averageCustCalc,
//   cookiesPerHour : cookiesPerHourCalc
// };

// seattle.averageCust();
// seattle.cookiesPerHour();
// tokyo.averageCust();
// tokyo.cookiesPerHour();
// dubai.averageCust();
// dubai.cookiesPerHour();
// paris.averageCust();
// paris.cookiesPerHour();
// lima.averageCust();
// lima.cookiesPerHour();




// function addSeattle(){
//   var addCity = document.getElementById('seattle');
//   addCity.textContent = 'Seattle';
//   var cityContent = addCity.innerHTML;
//   addCity.innerHTML =cityContent + ' Hourly customers: ' + seattle.averageCust() + ' / Total cookies purchased this hour: ' + seattle.cookiesPerHour();
// }
// function addTokyo(){
//   var addCity = document.getElementById('tokyo');
//   addCity.textContent = 'Tokyo';
//   var cityContent = addCity.innerHTML;
//   addCity.innerHTML =cityContent + ' Hourly customers: ' + tokyo.averageCust() + ' / Total cookies purchased this hour: ' + tokyo.cookiesPerHour();
// }
// function addDubai(){
//   var addCity = document.getElementById('dubai');
//   addCity.textContent = 'Dubai';
//   var cityContent = addCity.innerHTML;
//   addCity.innerHTML =cityContent + ' Hourly customers: ' + dubai.averageCust() + ' / Total cookies purchased this hour: ' + dubai.cookiesPerHour();
// }
// function addParis(){
//   var addCity = document.getElementById('paris');
//   addCity.textContent = 'Paris';
//   var cityContent = addCity.innerHTML;
//   addCity.innerHTML =cityContent + ' Hourly customers: ' + paris.averageCust() + ' / Total cookies purchased this hour: ' + paris.cookiesPerHour();
// }
// function addLima(){
//   var addCity = document.getElementById('lima');
//   addCity.textContent = 'Lima';
//   var cityContent = addCity.innerHTML;
//   addCity.innerHTML =cityContent + ' Hourly customers: ' + lima.averageCust() + ' / Total cookies purchased this hour: ' + lima.cookiesPerHour();
// }

// addSeattle();
// addTokyo();
// addDubai();
// addParis();
// addLima();








// //day2--------------------------------------------------




// //constructor ex
// // function Cities(minCust, maxCust, avgCookiesPerCust, averageCust, cookiesPerHour){
// //   this.minCust = minCust;
// //   this.maxCust = maxCust;
// //   this.avgCookiesPerCust = avgCookiesPerCust;
// //   this.averageCust = averageCust;
// //   this.cookiesPerHour = cookiesPerHour;
// // }

// var timeArray = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm',];
// var seattleLoop = function(){
//   for(var i = 0; i < 13; i++){
//     var cityTable = document.getElementsByClassName(timeArray[i])[0];
//     //last[0] is the 2nd iteration of className
//     cityTable.append(seattle.averageCust() + ' Customers and ' + seattle.cookiesPerHour() + ' cookies sold!');
//   }
// };
// var tokyoLoop = function(){
//   for(var i = 0; i < 13; i++){
//     var cityTable = document.getElementsByClassName(timeArray[i])[1];
//     //last[1] is the 2nd iteration of className
//     cityTable.append(tokyo.averageCust() + ' Customers and ' + tokyo.cookiesPerHour() + ' cookies sold!');
//   }
// };
// var dubaiLoop = function(){
//   for(var i = 0; i < 13; i++){
//     var cityTable = document.getElementsByClassName(timeArray[i])[2];
//     //last[1] is the 2nd iteration of className
//     cityTable.append(dubai.averageCust() + ' Customers and ' + dubai.cookiesPerHour() + ' cookies sold!');
//   }
// };
// var parisLoop = function(){
//   for(var i = 0; i < 13; i++){
//     var cityTable = document.getElementsByClassName(timeArray[i])[3];
//     //last[1] is the 2nd iteration of className
//     cityTable.append(paris.averageCust() + ' Customers and ' + paris.cookiesPerHour() + ' cookies sold!');
//   }
// };
// var limaLoop = function(){
//   for(var i = 0; i < 13; i++){
//     var cityTable = document.getElementsByClassName(timeArray[i])[4];
//     //last[1] is the 2nd iteration of className
//     cityTable.append(lima.averageCust() + ' Customers and ' + lima.cookiesPerHour() + ' cookies sold!');
//   }
// };
// seattleLoop();
// tokyoLoop();
// dubaiLoop();
// parisLoop();
// limaLoop();


// //from class--------------------------------------------------




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
      return cookiesSold;
    }
  };
}



var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);

var Shops = [seattle, tokyo, dubai, paris, lima];
var times = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm:','1pm: ','2pm: ','3pm:','4pm:','5pm: ','6pm: '];

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

var stringShops = ['seattle', 'dubai', 'lima'];
// var stringy = function(){
//   for(var j = 0; j < stringShops.length; j++){
//     stringShops[j];
//     return stringShops;
//   }
// };



Shop.prototype.render = function(){
  var citiesTable = document.getElementById('shopTable');
  var newDataRow = document.createElement('tr');
  newDataRow.textContent = stringShops[0];
  for(var i = 0; i < times.length; i++){
    var newData = document.createElement('td');
    newData.textContent = seattle.calcCookiesPerHour();//this.hourlyCookies[i]
    newDataRow.appendChild(newData);
  }
  citiesTable.appendChild(newDataRow);
};
Shop.prototype.render = function(){
  var citiesTable = document.getElementById('shopTable');
  var newDataRow = document.createElement('tr');
  newDataRow.textContent = stringShops[1];
  for(var i = 0; i < times.length; i++){
    var newData = document.createElement('td');
    newData.textContent = seattle.calcCookiesPerHour();//this.hourlyCookies[i]
    newDataRow.appendChild(newData);
  }
  citiesTable.appendChild(newDataRow);
};


for(var i = 0; i < Shops.length; i++){
  Shops[i].render();
}


//title created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var shopTitle = document.getElementById('shop-holder');
shopTitle.textContent = 'My Cookie Shop';
//title created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
