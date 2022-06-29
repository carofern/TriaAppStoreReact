
# Tria Store - Proyecto Final

Esta aplicación web es una tienda de Bicicletas de Triatlon realizada sobre el framework de React.
Funcionalmente permitirá que el potencial cliente visualice la oferta de productos y cantida de stock disponible, pueda agregarlos a un carrito de compras y finalizar con el pago de la misma.

Los productos y las ordenes de compras generadas serán almacenadas en una sus respectivas colecciones de ordenes en Firestore.

## Ver sitio productivo [aquí](https://tria-app-store-react.vercel.app/)
[![ezgif-3-947cf19800.md.gif](https://s8.gifyu.com/images/ezgif-3-947cf19800.md.gif)](https://gifyu.com/image/SKMf5)


## Instalar las dependencias

Para poder utilizar el proyecto debera contar con [NodeJS](https://nodejs.org/es/)

A fin de instalar las dependencias del projecto ejecutaremos:

```bash
npm install
```

## Correr el proyecto

```
npm start
```

## Librerias utilizadas
> - [Sweetalert2](https://sweetalert2.github.io/#download): Libreria utilizada para la generación de popups resultantes de la generacion de la orden de compra.

> - [Firebase](https://firebase.google.com/docs/web/setup) - Libreria para gestión de los servicios en la nube proporcionados por Google. En este caso Firebase.

> - [React-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)- Framework para la generacion de la interface de usuario

## .ENV
REACT_APP_API_KEY=AIzaSyBtmTRBu3RZAEmCYX_ub08bT7TdSvw6BjU
REACT_APP_AUTH_DOMAIN=react-store-8e75b.firebaseapp.com
REACT_APP_PROJECT_ID=react-store-8e75b
REACT_APP_STORAGE_BUCKET=react-store-8e75b.appspot.com
REACT_APP_MESSAGING_SENDER_ID=314502936238
REACT_APP_APP_ID=1:314502936238:web:c6717565b4bd0e2427df3f