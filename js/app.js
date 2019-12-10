'use strict';
console.log('js is working');


var seattle = {
  //hourly customers
  minCust : 23,
  maxCust : 65,
  avgCookiesPerCust : 6.5,
  randomCust : function(){
    var random = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(random);
    return random;
  },
  cookiesPerHour : function(){
    var cookies = (this.avgCookiesPerCust * this.randomCust());
    console.log(cookies);
    return cookies;
  }

};
seattle.randomCust();
seattle.cookiesPerHour();

// seattle.cookiesCalc();

seattle.cookiesPerHour();





var tokyo = {
  //hourly customers
  minCust : 3,
  maxCust : 24,
  avgCookiesPerCust : 1.2
};
var dubai = {
  //hourly customers
  minCust : 11,
  maxCust : 38,
  avgCookiesPerCust : 3.7
};
var paris = {
  //hourly customers
  minCust : 20,
  maxCust : 38,
  avgCookiesPerCust : 2.3
};
var lima ={
  //hourly customers
  minCust : 2,
  maxCust : 16,
  avgCookiesPerCust : 4.6
};
