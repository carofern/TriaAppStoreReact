import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetails from "./components/ItemDetail/ItemDetail";

function App() {

  return (
    <div className="App">
      <Header />
      <ItemListContainer />
      <ItemDetails
        title={"Robust Style"}
        slogan={"For Champions. We think that is great for you."}
        shipping={"Immediate delivery - Free shipping"}
        size={"Size: Small - Medium - Hacemos envíos gratis a través de Mercado Envíos."}
        price={"$244"}

      />

    </div>
  );
}

export default App;