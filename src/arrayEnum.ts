const teaFlavour: string[] = ["Masala", "Adrak"]
const teaPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Tea = {
    name: string;
    price: number
}

const menu: Tea[] = [
    {name: "masala" , price: 15},
    {name: "adrak" , price: 25},

]
// menu. ==> suggestion paoya jabe


// readonly array
const cities: readonly string[] = ["Mirpur", "Mirzapur"]
// cities.push("Pune")


const table: number[] [] = [
    [1, 2, 3],
    [4, 5, 6]
]

// Tuples
let teaTuple: [string, number];
teaTuple = ["Masala", 20]
// teaTuple = [20, "Masala"]

let userInfo: [string, number, boolean?]
userInfo = ["suborna", 100]
userInfo = ["sorna", 100, true]

const location: readonly [number, number] = [28.66, 32.22]

const teaItems: [name: string, price: number] = ["Masala", 25]


// Enums
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED //102
}

enum TeaType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeTea(type: TeaType) {
    console.log(`Making: ${type}`);
}

makeTea(TeaType.GINGER)
// makeTea("masala") // error


enum RandomEnum {
    ID = 1,
    NAME =  "Tea"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

// const s = Sugars.HIGH

let t: [string, number] = ["tea", 10]
t.push("extra")