import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pravatar.cc/300",
        }}
        style={styles.image}
      />

      <Text style={styles.nome}>
        Pedro Mitsuo
      </Text>

      <Text style={styles.curso}>
        Ciência da Computação - 2CCPO
      </Text>

      <Text style={styles.frase}>
        Desenvolvendo aplicações mobile com React Native.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          GitHub
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          LinkedIn
        </Text>
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
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  curso: {
    color: "#94A3B8",
    marginTop: 5,
  },

  frase: {
    color: "#E5E7EB",
    textAlign: "center",
    marginVertical: 20,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});