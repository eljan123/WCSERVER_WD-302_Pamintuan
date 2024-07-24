// Pamintuan, Eljan Joel Y.
// WD-302

const { add, subtract, multiply, divide } = require('./calculation');

const ratePerHour = 300;
const hoursPerDay = 4;
const daysPerWeek = 6;

const grossIncome = multiply(multiply(ratePerHour, hoursPerDay), daysPerWeek);
const tax = multiply(grossIncome, 0.1);
const sss = 1200;
const pagIbig = 300;
const philHealth = 400;

const totalDeductions = add(add(add(tax, sss), pagIbig), philHealth);
const netSalary = subtract(grossIncome, totalDeductions);

console.log();
console.log(`Gross Income: ${grossIncome}`);
console.log(`Tax: ${tax}`);
console.log(`SSS: ${sss}`);
console.log(`Pag-Ibig Fund: ${pagIbig}`);
console.log(`PhilHealth: ${philHealth}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`Net Salary: ${netSalary}`);