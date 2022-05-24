import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import React from "react"
/*import { toast } from "react-toastify"*/


export default function Item({ item }) {

/* Componentes de presentacion
  const AddButton = ({handleOnSubmit}) => {
    return (
        <button className="add-button" onClick={handleOnSubmit}>
            Add to cart
        </button>
    )
}
/* Funcion de Agregar al carrito 
const onSubmit = () => {
    toast.success(`👍🏼 Just added ${ItemListContainer} units to cart`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}*/

  return (
    <>
      <Card className="CardProd">
        <Card.Body>
        <img className="prodImgStyle" src={item.image} alt="Card cap"/>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.price}</Card.Text>
          <ItemCount stock={item.stock} initial={1} />
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}
