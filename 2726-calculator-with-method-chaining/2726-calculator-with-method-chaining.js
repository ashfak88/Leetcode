var Calculator = function(value) {
    this.result = value;
};

Calculator.prototype.add = function(num) {
    this.result += num;
    return this;
};

Calculator.prototype.subtract = function(num) {
    this.result -= num;
    return this;
};

Calculator.prototype.multiply = function(num) {
    this.result *= num;
    return this;
};

Calculator.prototype.divide = function(num) {
    if (num === 0) {
        throw new Error("Division by zero is not allowed");
    }
    this.result /= num;
    return this;
};

Calculator.prototype.power = function(num) {
    this.result = this.result ** num;
    return this;
};

Calculator.prototype.getResult = function() {
    return this.result;
};