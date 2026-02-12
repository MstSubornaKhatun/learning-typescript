function makeTea(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);
}


makeTea("Masala", 12)

function getTeaPrice(): number {
    return 25
}

function makeOrder(order: string) 
{
    if(!order) return null // (order: string): string // error
    return order
}


function logTea(): void {
    console.log("Tea is ready");
}

// function orderTea(type?: string){
    
// }

function orderTea(type: string = "Masala"){

}

function createTea(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): number {
    return 4
}

