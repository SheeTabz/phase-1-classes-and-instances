class Fish{
    constructor(name,age){
        this.name = name;
        this.age = age; 
    }
    sayHello(){
        return `Hello ${this.name}`;
    }
}
let oneFish = new Fish('JovFish', 67);
let twoFish = new Fish();
console.log(oneFish.sayHello())

class Calc{
    constructor(length){
        this.length = length;
    }
    findSquare(){
        return this.length * this.length
    }
}


const square = new Calc(5)
console.log(square.findSquare())

// Private Class
class Transaction{
    constructor(amount,cost, memeo){
        this._amount = amount
        this._cost = cost
        this._memeo = memeo
    }
}


const tabz = new Transaction(100, 500, "Hello")

tabz._amount = 400
console.log(tabz)


// PRIVATE CLASS METHOD TWO
class Transaction {
    // declare private fields
    #amount;
    #date;
    #memo;
    constructor(amount, date, memo) {
      // assign values to private fields
      this.#amount = amount;
      this.#date = date;
      this.#memo = memo;
    }
  }