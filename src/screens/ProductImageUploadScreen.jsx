import React, { useState } from "react";
import { View, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ProductImageUploadScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) return Alert.alert("Permiso denegado");
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, quality: 0.6
    });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  return (
    <View style={{ alignItems: "center", margin: 40 }}>
      <Button title="Tomar foto del producto" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 10 }} />}
    </View>
  );
}
