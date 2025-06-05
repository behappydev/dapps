import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function InputField({ label, value, onChangeText, placeholder, secureTextEntry, error }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && { borderColor: "red" }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  label: { marginBottom: 4, fontWeight: "bold", color: "#111" },
  input: {
    borderWidth: 1, borderColor: "#bbb", borderRadius: 8, padding: 10,
    fontSize: 16, backgroundColor: "#fff"
  },
  error: { color: "red", fontSize: 13, marginTop: 2 }
});
