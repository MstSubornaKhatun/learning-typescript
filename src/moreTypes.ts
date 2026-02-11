let response: any = "42";

// forceful Type Assertion (as keyword)
// let numericLength: number = response.length ==> sugesstion dei na
let numericLength: number = (response as string).length // ==> (response as string). dile akhn sob method dekhabe
// Number("42") // ata typescript er modhe colbena

type Book = {
    name: string
}

let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book 

console.log(bookObject) // as Book ata na dile (bookObject.) suggesion dibe na

const inputElement = document.getElementById("username") as HTMLInputElement

// unknown vs any Deep Dive
let value:any

value = "tea"
value = [1, 2, 3]
value = 2.5
value.toUpperCase()

let newValue:unknown

newValue = "tea"
newValue = [1, 2, 3]
newValue = 2.5
// newValue.toUpperCase() // 'newValue' is of type 'unknown'.

if(typeof newValue === "string") {
    newValue.toUpperCase();
}



// Handling Errors in Try/Catch
try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}


const data:unknown = "tea with code"
const strData: string = data as string



// The never Type
type Role = "admin" | "user" | "superadmin"

function redirectBasedOnRole(role: Role): void {
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return
    }
    role; // (parameter) role: never
    // Role er modhe akhn superadmin dile ==> (parameter) role: "superadmin"
 
}


function neverReturn():never{
    while(true){}
}


