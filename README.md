# EcommerceApp

EcommerceApp es una aplicación móvil minimalista, desarrollada en React Native, para compras y gestión de productos, con funcionalidades offline y sincronización en tiempo real.

## Funcionalidades principales

- **Lista de productos** con imágenes, descripción y precio
- **Detalle de producto**
- **Carrito de compras** persistente (offline y online)
- **Autenticación de usuario (login, registro, logout)**
- **Sincronización de productos con Firebase y persistencia en SQLite**
- **Permisos y obtención de ubicación en tiempo real**
- **Carga de imágenes con la cámara**
- **Interfaz responsiva, minimalista y fácil de navegar**

## Estructura del Proyecto

/EcommerceApp
  /src
    /components
      CustomButton.jsx
      InputField.jsx
      Loader.jsx
      ProductCard.jsx
    /screens
      CartScreen.jsx
      HomeScreen.jsx
      LocationScreen.jsx
      LoginScreen.jsx
      ProductDetailScreen.jsx
      ProductImageUploadScreen.jsx
      ProfileScreen.jsx
      SignupScreen.jsx
    /redux
      cartSlice.js
      productsSlice.js
      store.js
      userSlice.js
    /navigation
      AppNavigator.jsx
    /firebase
      firebaseConfig.js
    /services
      authService.js
      dbService.js
      locationService.js
      productService.js
    /assets
      // Imágenes, íconos, etc.
    /db
      // Solo referencias: dbService.js es el acceso principal
  App.js
  README.md
  package.json


## Instalación y pruebas

1. Clona el repositorio y ejecuta `npm install`
2. Configura tus claves en `/src/firebase/firebaseConfig.js`
3. Corre la app con `npm start` o `expo start`
4. Escanea el QR con Expo Go o compila APK usando `eas build -p android`

## Detalles Técnicos

- **Redux Toolkit:** Manejo global de productos, carrito y usuario
- **SQLite:** Almacenamiento offline y carga inicial de productos
- **Firebase:** Realtime Database y Auth
- **Expo Location & Camera:** Permisos de hardware
- **Navegación:** Stack + Bottom Tabs

## Screenshots

> [Agrega aquí capturas de pantalla de la app corriendo]

## Para expandir el proyecto

- Agregar tests con Jest + React Native Testing Library
- Mejorar estilos con React Native Paper o tu framework favorito
- Subida de imágenes a Firebase Storage
- Agregar favoritos, historial de pedidos o chat

---

App creada por Dylan Weinzettel – https://www.linkedin.com/in/ricardo-weinzettel-75712b220/ 
