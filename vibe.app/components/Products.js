import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
import productsDestacados from "../data/productsDestacados";

const Products = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      {productsDestacados.map((product) => (
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
    marginTop: 4
  }
});

export default Products;