const tea = {
    name: "masala tea",
    price: 20,
    isHot: true
}



// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

let cha: {
    name: string;
    price: number;
    isHot: boolean
}

cha = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakCha: Tea = {
    name: "Adrak Cha",
    price: 25,
    ingredients: ["ginger", "tea leaves"]


}

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "sugar"}

smallCup = bigCup


type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee


type User = {
    username: string;
    password: string
}

const u: User = {
    username: "code with coffee",
    password: "123"
}

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}


type Order = {
    id: string;
    item: Item[];
    address: Address
}

type Water = {
    name: string;
    price: number;
    isHot: boolean
}


const updateWater = (update: Partial<Water>) => {
    console.log("updating tea with", update);
}
updateWater({price: 25})
updateWater({isHot: false})

type WaterOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<WaterOrder>) => {
    console.log(order)
}

placeOrder({
    name: "Pran Water",
    quantity: 5
})

type Drink = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicDrinkInfo = Pick<Drink, "name" | "price">;

const drinkInfo: BasicDrinkInfo = {
    name: "Lemon Drink",
    price: 30
}

type TeaNew = {
     name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

type PublicTea = Omit<Tea,"secretIngredients">;
