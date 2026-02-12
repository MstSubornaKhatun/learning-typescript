function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(43)
wrapInArray({flavour: "Ginger"})


function pair<A, B>(a: A, b: B):[A, B] {
    // return [b, a] // error
    return [a, b]
}

pair("masala", "test")
pair("masala", 20)
pair("masala", {flavour: "Ginger"})


interface Box<T>{
    content: T
}

// const numberBox: Box<number> = {content: "10"}
const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}


interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> ={
    status: 200,
    data: {flavor: "masala"}
}







