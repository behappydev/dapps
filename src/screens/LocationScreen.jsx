import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import * as Location from "expo-location";

export default function LocationScreen() {
  const [location, setLocation] = useState(null);

  const handleGetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso denegado", "No se puede acceder a la ubicación");
      return;
    }
    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Obtener ubicación" onPress={handleGetLocation} />
      {location && (
        <Text>Lat: {location.latitude} - Lon: {location.longitude}</Text>
      )}
    </View>
  );
}
