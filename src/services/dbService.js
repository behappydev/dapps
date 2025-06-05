import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("ecommerce.db");

export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY NOT NULL, name TEXT, price REAL, image TEXT, description TEXT);"
    );
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY AUTOINCREMENT, productId INT, name TEXT, price REAL, image TEXT, quantity INT);"
    );
    // Carga inicial de productos de ejemplo
    tx.executeSql("INSERT OR IGNORE INTO products (id, name, price, image, description) VALUES (1, 'Camisa', 20, 'https://i.imgur.com/camisa.jpg', 'Camisa de algodón minimalista.');");
    tx.executeSql("INSERT OR IGNORE INTO products (id, name, price, image, description) VALUES (2, 'Pantalón', 30, 'https://i.imgur.com/pantalon.jpg', 'Pantalón clásico azul.');");
    tx.executeSql("INSERT OR IGNORE INTO products (id, name, price, image, description) VALUES (3, 'Zapatillas', 50, 'https://i.imgur.com/zapatillas.jpg', 'Zapatillas urbanas livianas.');");
    // Puedes agregar más productos aquí
  });
};

export default db;
