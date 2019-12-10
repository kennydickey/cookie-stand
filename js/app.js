'use strict';
console.log('js is working');

//find the product of average cookies per person * people per hour
var cookiesPerHourCalc = function(){
  var perHour = (this.avgCookiesPerCust * this.averageCust());
  console.log(perHour);
  return perHour;
};
//find average custome count per hour
var averageCustCalc = function(){
  var randomCalc = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  console.log(randomCalc);
  return randomCalc;
};

var seattle = {
  minCust : 23,
  maxCust : 65,
  avgCookiesPerCust : 6.5,
  //average customer moved to a var
  averageCust : averageCustCalc,
  //average customer times fixed cookies per hour average moved to a var
  cookiesPerHour : cookiesPerHourCalc
};
var tokyo = {
  //hourly customers
  minCust : 3,
  maxCust : 24,
  avgCookiesPerCust : 1.2,
  averageCust : averageCustCalc,
  cookiesPerHour : cookiesPerHourCalc
};
var dubai = {
  //hourly customers
  minCust : 11,
  maxCust : 38,
  avgCookiesPerCust : 3.7,
  averageCust : averageCustCalc,
  cookiesPerHour : cookiesPerHourCalc
};
var paris = {
  //hourly customers
  minCust : 20,
  maxCust : 38,
  avgCookiesPerCust : 2.3,
  averageCust : averageCustCalc,
  cookiesPerHour : cookiesPerHourCalc
};
var lima ={
  //hourly customers
  minCust : 2,
  maxCust : 16,
  avgCookiesPerCust : 4.6,
  averageCust : averageCustCalc,
  cookiesPerHour : cookiesPerHourCalc
};

seattle.averageCust();
seattle.cookiesPerHour();
tokyo.averageCust();
tokyo.cookiesPerHour();
dubai.averageCust();
dubai.cookiesPerHour();
paris.averageCust();
paris.cookiesPerHour();
lima.averageCust();
lima.cookiesPerHour();
