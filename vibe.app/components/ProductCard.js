import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductCard = ({ product, onPress }) => {

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={{ marginBottom: 16 }}>
      <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }}  />
      <View style={styles.textProd}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{product.name}</Text>
        <Text style={{ fontSize: 16 }}>{product.price}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 16,
      
    },
    textProd: {
        marginTop: 6
    }
});

export default ProductCard;