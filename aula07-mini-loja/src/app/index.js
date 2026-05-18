import { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

import { products } from "../data/products";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const { addToCart, cart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mini Loja
      </Text>

      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => router.push("/carrinho")}
      >
        <Text style={styles.cartText}>
          Carrinho ({cart.length})
        </Text>
      </TouchableOpacity>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <View>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                R$ {item.price}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>
                Adicionar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  cartButton: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  cartText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  product: {
    backgroundColor: "#1F2937",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  price: {
    color: "#38BDF8",
    marginTop: 5,
  },

  button: {
    backgroundColor: "#22C55E",
    padding: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});