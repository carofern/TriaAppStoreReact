import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import {products} from "./data/products";
import Item from "./components/Item/Item";


function App() {

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000)

  })

  task.then((result) => {
    console.log(result)
  }, err => {
    console.log(err)
  }).catch((err) => {
    console.log(err)
  })


  return (
    <div className="App">
      <Navbar />
      <ItemListContainer count={"Computadora"} />

      {products.map((products, index) => (
        <Item product={products} key={products.id} />
      )
      )}
    </div>
  );
}

export default App;