console.log('up and working !');

let x: string = 'Hello';
console.log(x);

const y: number = 10.1;

console.warn("number type : " + y);

var z : boolean = true;
console.error("boolean type", z)

let a: any;
a = 'now it is string'
console.warn(typeof a);

a= 20.23;
console.warn(typeof a);

let b: string | number | Date
// b = true
b = 'Hello'
console.warn(typeof b);

let data: number[] = [1,2,2,3,4];
data.push(60);
console.log(data.length)
data.forEach(
    (num) => {console.log(num)}
);


let data1 : any[] = ["fruits", 10, 23.3, true]
console.log(data1)

function printf(p:number, q?:number): number{
    if(q ==undefined)
        return p+p;
    else
        return p+q;
}

console.log(printf(10));

class Product{

    private pid: number;
    private description: string;
    private price: number;

    constructor(pid: number, description: string, price: number){

        this.pid = pid;
        this.description = description;
        this.price = price;
    }

    public getpid(): number{
        return this.pid;
    }

    public getDescription(): string{
        return this.description;
    }

    public getPrice(): number{
        return this.price;
    }

    public printAll(): void{
        console.log("Pid ", this.pid);
        console.log("description  ", this.description);
        console.log("price", this.price);

    }
}

let p = new Product(101, "Macbook", 180000);
p.printAll();