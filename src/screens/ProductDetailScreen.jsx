import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.img} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.desc}>{product.description || "Sin descripción"}</Text>
      <CustomButton title="Agregar al carrito" onPress={() => dispatch(addToCart(product))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20 },
  img: { width: "100%", height: 200, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginTop: 10, color: "#111" },
  price: { fontSize: 22, color: "#111", marginVertical: 6 },
  desc: { fontSize: 15, color: "#333", marginVertical: 6 }
});
