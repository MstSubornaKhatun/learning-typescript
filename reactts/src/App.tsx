
import './App.css'
import { Card } from './components/Card.tsx';
import { Counter } from './components/Counter'
import { OrderForm } from './components/OrderForm.tsx';
import { TeaCard } from './components/TeaCard.tsx';
import TeaList from './components/TeaList';

import type {Tea} from "./types.ts";

const menu: Tea[] =[
  {id: 1, name: "Masala", price: 25},
  {id: 2, name: "Ginger", price: 50},
  {id: 3, name: "Lemon", price: 60},
]


function App() {


  return (
    <>

      <h1>Vite + React</h1>
      <TeaCard 
      name="Headphones"
      price={5000}
      />
      <TeaCard 
      name="iPhone"
      price={8000}
      />

      <div>
        <Counter/>
      </div>

      <div>
        <TeaList items={menu} />
      </div>
      <div>
        <OrderForm 
        onSubmit={(order)=>{
          console.log("Placed", order.name, order.cups)
        }}
        />
      </div>
      <div>
        <Card title='Tea With TypeScript'
        // footer="suborna"
        footer={<button>Order Now</button>}
         />
      </div>

    </>
  )
}

export default App
