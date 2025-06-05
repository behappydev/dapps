import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export default function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: { backgroundColor: "#111", padding: 12, borderRadius: 8, alignItems: "center", marginVertical: 8 },
  txt: { color: "#fff", fontWeight: "bold", fontSize: 16 }
});
