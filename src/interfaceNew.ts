interface  Tea {
    flavour: string;
    price: number;
    milk?: boolean; 
}

const masala: Tea = {
    flavour: "masala",
    price: 30
}

interface Shop {
    readonly id: number;
    name: string;

}

const s: Shop = {id: 1, name: "Tea With Code"}
// s.id = 2 // Cannot assign to 'id' because it is a read-only property.

interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p*0.5

interface TeaMachine {
    start(): void;
    stop(): void
}
const machine: TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

interface TeaRatings {
    [flavour: string]: number
}

const ratings: TeaRatings = {
    masala: 4.5,
    ginger: 4.5,
}


interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name: "Suborna",
    age: 92
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}



