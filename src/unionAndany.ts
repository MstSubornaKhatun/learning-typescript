// Union

// let subs = '1M'
let subs: number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'
// apiRequestStatus = "done"
/*
Type '"suborna"' is not assignable to type '"pending" | "success" | "error"'.
*/ 
apiRequestStatus = "success"


let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'

airlineSeat = 'middle'



// any
const orders = ['12', '20', '28', '42']
// let currentOrder;
// currentOrder ==> let currentOrder: any


// let currentOrder: any;
let currentOrder: string | undefined;

for(let order of orders){
    if(order === '28'){
        currentOrder = order
        break
    }
    currentOrder = "11"
}

// currentOrder = 42

// console.log(currentOrder); 
// currentOrder ==> let currentOrder: string | undefined

console.log(currentOrder); 
/*
let currentOrder: string; 
Variable 'currentOrder' is used before being assigned.
*/ 

// avoide: any