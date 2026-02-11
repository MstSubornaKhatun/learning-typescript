let drink = "tea"
/*
'drink' is declared but its value is never read.
*/ 


/*
drink = 0
Type 'number' is not assignable to type 'string'.
*/ 



// let cups = Math.random() > 0.5 ? 10 : 5
/*
'cups' is declared but its value is never read.
*/ 


let cups = Math.random() > 0.5 ? 10 : '5'
/*
'cups' is declared but its value is never read.
*/ 
// its called Type Inference

// let let --> syntax error 

let channelName = "Tea With Code"

/*
let channelName = "Tea With Code"
channelName = 1221
*/ 
// --> type error
/*
Type 'number' is not assignable to type 'string'.
*/ 

let teaFlavour:string = "masala tea"
teaFlavour = "ginger tea"
// teaFlavour = 2
/*
Type 'number' is not assignable to type 'string'.
*/ 


// Type Annotation


// let teaOrder:number
let teaOrder:boolean