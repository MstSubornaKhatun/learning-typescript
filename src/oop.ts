class Tea {
    flavour: string; // Property 'flavour' has no initializer and is not definitely assigned in the constructor.
    // price: number // Property 'price' has no initializer and is not definitely assigned in the constructor.


    // constructor(flavour: string, price: number){
    //     this.flavour = flavour 
    //     this.price = price
    // }
    constructor(flavour: string,){
        this.flavour = flavour 
        console.log(this)
    }

}

// const masalaTea = new Tea("Ginger", 20)
// masalaTea.flavour = "masala"

const masalaTea = new Tea("Ginger")
masalaTea.flavour = "masala"


class TeaNew {
    public flavour: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal(){
        return this.secretIngredients // ok
    }

    


}

class Shop {
    protected shopName = "Tea Corner"
}

class Branch extends Shop {
    getName() {
        return this.shopName //ok
    }
}


// new Branch() // dot (.) dile getName suggestion dibe


class Wallet {
    #balance = 100

    getBalance(){
        return this.#balance
    }
}


const w = new Wallet()

class Cup {
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

class ModernTea {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if(value > 5) throw new Error ("Too sweet")
            this._sugar = value
    }
}


const c = new ModernTea()
c.sugar = 3


class OneTea {
    static shopName = "Tea With Code"

    constructor(public flavour: string){}
}
console.log(OneTea.shopName);

abstract class Drink {
    abstract make(): void
}

class MyTea extends Drink {
    make(){
        console.log("Brewing Tea");
    }

}

class Heater {
    heat(){}
}

class TeaMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}