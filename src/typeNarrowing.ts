function getTea(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} tea...`
        // kind এর পর dot দিলে suggestion আসবে (string methods)
    }
    return `Tea order: ${kind}`
    // kind এর পর dot দিলে suggestion আসবে (number methods)
}

function serveTea(msg?: string){
    if(msg){
        return `Serving ${msg}`;
    }
    // return `Serving default masala tea ${msg}`; // ==> type narrowing
    return `Serving default masala tea`;
}


function orderTea(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `small cutting tea...`
    }
    if(size === "medium" || size === "large"){
        return `make extra tea`
    }
    return `tea order #${size}`
}


class KulhadTea{
    serve(){
        return `Serving Kulhad Tea`
    }
}
class Cutting{
    serve(){
        return `Serving Cutting Tea`
    }
}

function serve(tea: KulhadTea | Cutting){
    if(tea instanceof KulhadTea){
        return tea.serve();
    }
}

type TeaOrder = {
    type: string
    sugar: number
}

function isTeaOrder(obj: any): obj is TeaOrder{
    return(
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" 

    )
}

function serveOrder(item:TeaOrder | string){
    if(isTeaOrder(item)){
        return `Serving ${item.type} tea with ${item.sugar} sugar`
    }
    return `Serving custom tea: ${item}`
}

type MasalaTea = {type: "masala"; spicelevel: number};
type GingerTea = {type: "ginger"; amount: number};
type ElaichiTea = {type: "elaichi"; aroma: number};


type Tea = MasalaTea | GingerTea | ElaichiTea 

function MakeTea(order: Tea){
    switch (order.type) {
        case "masala":
            return `Masala Tea`
            break;
            
        case "ginger":
            return `Ginger Tea`
            break;

        case "elaichi":
            return `Elaichi Tea`
            break;
    }
}

function brew(order: MasalaTea | GingerTea){
    if("spicelevel" in order){
        //
    }
}

function isStringArray(arr: unknown): arr is string[]{

}


