import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pravatar.cc/300",
        }}
        style={styles.image}
      />

      <Text style={styles.nome}>Seu Nome</Text>
      <Text style={styles.curso}>Ciência da Computação - 2º Ano</Text>

      <Text style={styles.frase}>
        "Transformando café em código."
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  nome: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },

  curso: {
    color: "#9CA3AF",
    marginTop: 5,
    fontSize: 16,
  },

  frase: {
    color: "#E5E7EB",
    marginVertical: 20,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    width: "80%",
    borderRadius: 12,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});