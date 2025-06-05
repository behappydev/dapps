import React from "react";
import { View, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import CustomButton from "../components/CustomButton";

export default function CartScreen() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<Text style={{ textAlign: "center", margin: 30 }}>El carrito está vacío</Text>}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center", margin: 8 }}>
            <Text style={{ flex: 1 }}>{item.name} x {item.quantity}</Text>
            <CustomButton title="Quitar" onPress={() => dispatch(removeFromCart(item.id))} style={{ backgroundColor: "#f44" }} />
          </View>
        )}
      />
      {items.length > 0 && (
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Total: ${total}</Text>
          <CustomButton title="Vaciar carrito" onPress={() => dispatch(clearCart())} style={{ backgroundColor: "#555" }} />
        </View>
      )}
    </View>
  );
}
