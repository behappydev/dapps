import React, { useState } from "react";
import { View, Alert } from "react-native";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { login } from "../services/authService";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setError("");
    try {
      const res = await login(email, password);
      dispatch(setUser(res.user));
      Alert.alert("Login exitoso", "¡Bienvenido!");
      navigation.replace("Home");
    } catch (e) {
      setError("Credenciales inválidas");
    }
  };

  return (
    <View style={{ margin: 24 }}>
      <InputField label="Email" value={email} onChangeText={setEmail} placeholder="usuario@mail.com" />
      <InputField label="Contraseña" value={password} onChangeText={setPassword} placeholder="********" secureTextEntry error={error} />
      <CustomButton title="Ingresar" onPress={handleLogin} />
      <CustomButton title="¿No tienes cuenta? Regístrate" onPress={() => navigation.navigate("Signup")} style={{ backgroundColor: "#aaa" }} />
    </View>
  );
}
