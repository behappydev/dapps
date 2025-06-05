import React, { useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productsSlice";
import Loader from "../components/Loader";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => { dispatch(getProducts()); }, []);

  if (status === "loading") return <Loader />;
  if (!items.length) return <Text style={{ textAlign: "center", margin: 24 }}>No hay productos disponibles</Text>;
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) =>
        <ProductCard
          product={item}
          onPress={() => navigation.navigate("ProductDetail", { product: item })}
        />}
    />
  );
}
