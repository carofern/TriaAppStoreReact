
import React, { useState } from 'react'
import Button from "react-bootstrap/Button";


export default function ItemCountCart({stock,initial}) {

const [itemCount,SetItemCount] = useState(initial)

const delItem  = () => {
    if(itemCount > 1) SetItemCount(itemCount - 1) 
}

const addItem  = () => {
    if(itemCount < stock) SetItemCount(itemCount + 1) 
}

React.useEffect(()=>{
    if(itemCount === stock){
        console.log("Has alcanzado el limite de stock")
    }
},[itemCount,stock,initial])

  return (
  <>
   <div className='itemAddCard' >
       <div className='itemPanelAdd'>
    <Button onClick={delItem}>-</Button>
    <p className='itemCountValue'>{itemCount}</p>
    <Button onClick={addItem}>+</Button>
       </div>
   </div>
    </>
  );
}

/*
import React from "react"
import { toast } from "react-toastify"

 Declaracion de nuestro functional component
export default function ItemCount(stock, initial) {

 /* Declaracion del state hook  
const [count, setCount] = React.useState(initial)
const stock = 4 

/* Funcion para aumentar la cantidad 
const onAdd = () => {
    if (count < stock) {
        setCount(count + 1)
    }
}
/* Funcion manejadora para dismunuir la cantidad 
const onDecrease = () => {
    if (count > 0) {
        setCount(count - 1)
    }
}

React.useEffect(() => {
    if(count ===stock) {
        console.log("No more stock of this product");
    }
}, [count,stock, initial])

/* Funcion de Agregar al carrito 
const onSubmit = () => {
    toast.success(`👍🏼 Just added ${count} units to cart`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

/* Componentes de presentacion 
const StockButton = ({handleOnClick, text}) => {
    return (
        <button className="stock-button" onClick={handleOnClick}>
            {text}
        </button>
    )
}
/* Componentes de presentacion 
const AddButton = ({handleOnSubmit}) => {
    return (
        <button className="add-button" onClick={handleOnSubmit}>
            Add to cart
        </button>
    )
}

return (
        <div className="add-button-container">
            <StockButton text="-" handleOnClick={onDecrease}/>
            <span className="add-button-count">{count}</span>
            <StockButton text="+" handleOnClick={onAdd}/>
            <AddButton handleOnSubmit={onSubmit} />
        </div>
    )
}
*/