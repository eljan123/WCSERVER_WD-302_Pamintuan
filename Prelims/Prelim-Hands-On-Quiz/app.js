var app = require('./calculation.js');

var income = 7200;
var tax = 720;
var sss = 1200;
var pagIbig = 300;
var philHealth = 400;

var app1 = new app(income, tax, sss, pagIbig, philHealth);

console.log();
console.log('The gross income is: ' + income);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-ibig fund: ' + pagIbig);
console.log('PhilHealth: ' + philHealth);
console.log('Total deduction: ' + app1.total());
console.log('The net salary is: ' + app1.deduction());
