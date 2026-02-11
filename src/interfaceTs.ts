
// function makeTea(order: {type: string; sugar: number; strong: boolean}){
//     console.log(order)
// }


// function serveTea(order: {type: string; sugar: number; strong: boolean}){
//     console.log(order)
// }

type TeaOrder = {
    type: string; 
    sugar: number; 
    strong: boolean
};


function makeTea(order: TeaOrder){
    console.log(order)
}

function serveTea(order: TeaOrder){
    console.log(order)
}



type TeaRecipe = {
    water: number;
    milk: number;
}

/*
interface TeaRecipe {
    water: number;
    milk: number;
}
*/

class MasalaTea implements TeaRecipe {
    water = 100;
    milk = 50;

}



/*
type CupSize = "small" | "large"
class Tea implements CupSize {

}

A class can only implement an object type or intersection of object types with statically known members.
*/


interface CupSize {
    
    size: "small" | "large"
} 
class Tea implements CupSize {
    size: "small" | "large" = "large";  
}


/*
type Response = {ok: true} | {ok: false}
class myRes implements Response{
    ok: boolean = true;
}


Response ==>
A class can only implement an object type or intersection of object types with statically known members.
*/

type TeaType = "masala" | "ginger" | "lemon"

function orderTea(t: TeaType){
    console.log(t)
}



// Intersection Types
type BaseTea = {teaLeves: number}
type Extra = {masala: number}

type MassalaTea = BaseTea & Extra

const cup: MassalaTea = {
    teaLeves: 2,
    masala: 1

}



// Optional & Readonly Properties
type User = {
    username: string;
    bio?: string;
}

const u1: User = {username: "Suborna"}
const u2: User =  {username: "Suborna", bio: "suborna.ai"}

type Config = {
    readonly appName: string
    version: number
}


const cfg: Config = {
    appName: "Masterji",
    version: 1
}

// cfg.appName = "TeaWithCode" 

/*
appName ==> Cannot assign to 'appName' because it is a read-only property.
*/ 







