import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#111" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }
});
