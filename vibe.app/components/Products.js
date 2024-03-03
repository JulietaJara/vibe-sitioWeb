import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "MATE FLORES AMARILLAS",
    price: "3.000,00",
    image: '../images/mate1.png',
  },
  {
    id: 2,
    name: "JABONERAS",
    price: "3.000,00",
    image: '../images/taza1.png',
  },
  {
    id: 3,
    name: "TAZA",
    price: "3.000,00",
    image: '../images/jabonera1.png',
  },
  {
    id: 4,
    name: "TAZA PUNTITOS",
    price: "3.000,00",
    image: '../images/taza2.png',
  },
  {
    id: 5,
    name: "TAZA CON FLOR",
    price: "3.000,00",
    image: '../images/taza3.png',
  },
  {
    id: 6,
    name: "MATE FLORES AMARILLAS",
    price: "3.000,00",
    image: '../images/taza4.png',
  },
];

const Products = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onPress={() => console.log("Product pressed:", product.name)} />
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
  }
});

export default Products;