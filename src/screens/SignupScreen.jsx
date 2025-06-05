import React, { useState } from "react";
import { View, Alert } from "react-native";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { signup } from "../services/authService";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSignup = async () => {
    setError("");
    try {
      const res = await signup(email, password);
      dispatch(setUser(res.user));
      Alert.alert("Registro exitoso", "Ya puedes iniciar sesión");
      navigation.replace("Home");
    } catch (e) {
      setError("Error al registrar. ¿Ya existe el usuario?");
    }
  };

  return (
    <View style={{ margin: 24 }}>
      <InputField label="Email" value={email} onChangeText={setEmail} placeholder="usuario@mail.com" />
      <InputField label="Contraseña" value={password} onChangeText={setPassword} placeholder="********" secureTextEntry error={error} />
      <CustomButton title="Registrarse" onPress={handleSignup} />
      <CustomButton title="¿Ya tienes cuenta? Inicia sesión" onPress={() => navigation.navigate("Login")} style={{ backgroundColor: "#aaa" }} />
    </View>
  );
}
