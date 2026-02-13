
interface TeaListProps  {
    name: string;
    price: number;
    isSpecial: boolean;
}

export function TeaCard({name, price, isSpecial = false}: TeaListProps ){
    return (
        <article>
            <h2>
                {name} {isSpecial && <span>⭐</span>}
            </h2>
            <p>{price}</p>
        </article>
    )
}