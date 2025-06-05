import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../components/CustomButton";
import { logout } from "../redux/userSlice";

export default function ProfileScreen() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  return (
    <View style={{ alignItems: "center", margin: 40 }}>
      <Text style={{ fontSize: 20, margin: 10, fontWeight: "bold" }}>
        {user ? `Hola, ${user.email}` : "Usuario no autenticado"}
      </Text>
      <CustomButton title="Cerrar sesión" onPress={() => dispatch(logout())} />
    </View>
  );
}
