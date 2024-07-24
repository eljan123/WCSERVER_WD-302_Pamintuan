module.exports = function(income, tax, sss, pagIbig, philHealth) {
    var income = 7200;
    var tax = 720;
    var sss = 1200;
    var pagIbig = 300;
    var philHealth = 400;


    this.income = income;
    this.tax = tax;
    this.sss = sss;
    this.pagIbig = pagIbig;
    this.philHealth = philHealth;
    this.total = function() {
        return this.tax + this.sss + this.pagIbig + this.philHealth;
    }
    this.deduction = function() {
        return this.income - this.total();
    }
}