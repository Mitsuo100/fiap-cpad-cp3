import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(false);

  useEffect(() => {
    setMeta(copos >= 8);
  }, [copos]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hidratação</Text>

      <Text style={styles.counter}>{copos}</Text>

      {meta && (
        <Text style={styles.meta}>
          🏆 Meta do dia atingida
        </Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCopos(copos + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.reset}
        onPress={() => setCopos(0)}
      >
        <Text style={styles.buttonText}>Resetar</Text>
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
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  counter: {
    fontSize: 80,
    color: "#38BDF8",
    marginVertical: 20,
  },

  meta: {
    color: "#22C55E",
    marginBottom: 20,
    fontSize: 18,
  },

  button: {
    backgroundColor: "#2563EB",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  reset: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 10,
    width: 180,
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});