import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ciência da Computação</Text>
      <Text style={styles.subtitle}>2CCO</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardText}>React</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>Node</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>Python</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#94A3B8",
    marginBottom: 30,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  card: {
    backgroundColor: "#2563EB",
    padding: 20,
    borderRadius: 12,
  },

  cardText: {
    color: "#fff",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});