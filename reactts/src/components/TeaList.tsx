// rfce


import type {Tea} from "../types" // only type import
import { TeaCard } from "./TeaCard"
// import type {TeaCard} from "./TeaCard"

interface TeaListProps {
    items: Tea[]
}


export function TeaList({items}: TeaListProps ) {
  return (
    <div>
        {items.map((tea)=> (
            <TeaCard
            key={tea.id}
            name={tea.name}
            price={tea.price}
            isSpecial={tea.price > 30}
            />
        ))}
    </div>
  )
}

export default TeaList