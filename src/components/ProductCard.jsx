import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.img} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: { margin: 8, padding: 10, backgroundColor: "#fff", borderRadius: 8, elevation: 3 },
  img: { width: "100%", height: 120, borderRadius: 8 },
  title: { fontWeight: "bold", fontSize: 18, marginTop: 8, color: "#111" },
  price: { color: "#555", fontSize: 16 }
});
