export const products = [
    {
      id: 1, 
      title: "AirPods",
      description: "Comfortable",
      stock: 3,
      price: 250,
      image: "/img/NC3007.jpg"
    },
    {
      id: 2, 
      title: "Iphone Charger",
      description: "for 6/6S/7/7S",
      stock: 2,
      price: 50,
      image: "/img/NC3012.jpg"
    },
    {
      id: 3, 
      title: "Airpod Wireless HD",
      description: "Best Quality",
      stock: 5,
      price: 500,
      image: "/img/NC3070.jpg"
    },
    {
      id: 4, 
      title: "Airphones Wire",
      description: "Cheaper",
      stock: 1,
      price: 50,
      image: "/img/NC5034.jpg"
    },
  ]

 
export const newTask = new Promise ((resolve, reject) => {

  setTimeout(() => {
    let StateOfAnswer = true;
    if(StateOfAnswer){
       resolve(products);
    }else{
      const errorMessage =  new Error ( "No se pudo obtener la informacion del servidor")
      reject((errorMessage))
    } 
  }, 3000)
  
}) 
