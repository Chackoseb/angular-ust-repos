console.log('up and working !');
var x = 'Hello';
console.log(x);
var y = 10.1;
console.warn("number type : " + y);
var z = true;
console.error("boolean type", z);
var a;
a = 'now it is string';
console.warn(typeof a);
a = 20.23;
console.warn(typeof a);
var b;
// b = true
b = 'Hello';
console.warn(typeof b);
var data = [1, 2, 2, 3, 4];
data.push(60);
console.log(data.length);
data.forEach(function (num) { console.log(num); });
var data1 = ["fruits", 10, 23.3, true];
console.log(data1);
function printf(p, q) {
    if (q == undefined)
        return p + p;
    else
        return p + q;
}
console.log(printf(10));
var Product = /** @class */ (function () {
    function Product(pid, description, price) {
        this.pid = pid;
        this.description = description;
        this.price = price;
    }
    Product.prototype.getpid = function () {
        return this.pid;
    };
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.printAll = function () {
        console.log("Pid ", this.pid);
        console.log("description  ", this.description);
        console.log("price", this.price);
    };
    return Product;
}());
var p = new Product(101, "Macbook", 180000);
p.printAll();
