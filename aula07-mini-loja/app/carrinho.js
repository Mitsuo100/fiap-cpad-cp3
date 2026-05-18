import { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

import { CartContext } from "../context/CartContext";

export default function Carrinho() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Carrinho
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              R$ {item.price}
            </Text>
          </View>
        )}
      />

      <Text style={styles.total}>
        Total: R$ {total}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  item: {
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  name: {
    color: "#fff",
    fontSize: 18,
  },

  price: {
    color: "#38BDF8",
    marginTop: 5,
  },

  total: {
    color: "#22C55E",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },

  button: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});