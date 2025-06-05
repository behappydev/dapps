import db from "./dbService";
import { db as firebaseDb } from "../firebase/firebaseConfig";
import { ref, get, set } from "firebase/database";

// Obtener productos (primero local, luego online si está disponible)
export const fetchProducts = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM products", [], (_, { rows: { _array } }) => {
        resolve(_array);
      });
    });
  });

// Sincronizar productos entre Firebase y SQLite
export const syncProducts = async () => {
  const productsRef = ref(firebaseDb, "products/");
  const snapshot = await get(productsRef);
  if (snapshot.exists()) {
    const products = Object.values(snapshot.val());
    db.transaction(tx => {
      products.forEach(prod => {
        tx.executeSql(
          "INSERT OR REPLACE INTO products (id, name, price, image, description) VALUES (?, ?, ?, ?, ?)",
          [prod.id, prod.name, prod.price, prod.image, prod.description]
        );
      });
    });
  }
};

// Guardar productos locales en Firebase (si tienes permisos admin)
export const pushLocalProductsToFirebase = async () => {
  db.transaction(tx => {
    tx.executeSql("SELECT * FROM products", [], async (_, { rows: { _array } }) => {
      const productsObj = {};
      _array.forEach(prod => {
        productsObj[prod.id] = prod;
      });
      await set(ref(firebaseDb, "products/"), productsObj);
    });
  });
};
