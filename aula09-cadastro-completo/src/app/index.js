import { useRef, useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { TextInputMask } from "react-native-masked-text";

export default function App() {
  const emailRef = useRef(null);
  const cpfRef = useRef(null);
  const phoneRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const [profile, setProfile] = useState("Estudante");

  const [terms, setTerms] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  function validate() {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Nome obrigatório";
    }

    if (!email.includes("@")) {
      newErrors.email = "E-mail inválido";
    }

    if (cpf.length < 14) {
      newErrors.cpf = "CPF inválido";
    }

    if (phone.length < 15) {
      newErrors.phone = "Telefone inválido";
    }

    if (!terms) {
      newErrors.terms = "Aceite os termos";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <Text style={styles.title}>
        Cadastro Completo
      </Text>

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#94A3B8"
        style={styles.input}
        value={name}
        onChangeText={setName}
        returnKeyType="next"
        onSubmitEditing={() =>
          emailRef.current.focus()
        }
      />

      {errors.name && (
        <Text style={styles.error}>
          {errors.name}
        </Text>
      )}

      <TextInput
        ref={emailRef}
        placeholder="E-mail"
        placeholderTextColor="#94A3B8"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() =>
          cpfRef.current.getElement().focus()
        }
      />

      {errors.email && (
        <Text style={styles.error}>
          {errors.email}
        </Text>
      )}

      <TextInputMask
        ref={cpfRef}
        type={"cpf"}
        placeholder="CPF"
        placeholderTextColor="#94A3B8"
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        returnKeyType="next"
        onSubmitEditing={() =>
          phoneRef.current.getElement().focus()
        }
      />

      {errors.cpf && (
        <Text style={styles.error}>
          {errors.cpf}
        </Text>
      )}

      <TextInputMask
        ref={phoneRef}
        type={"cel-phone"}
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        placeholder="Telefone"
        placeholderTextColor="#94A3B8"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {errors.phone && (
        <Text style={styles.error}>
          {errors.phone}
        </Text>
      )}

      <Text style={styles.sectionTitle}>
        Perfil
      </Text>

      <View style={styles.chipsContainer}>
        {[
          "Estudante",
          "Profissional",
          "Freelancer",
        ].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.chip,
              profile === item &&
                styles.activeChip,
            ]}
            onPress={() => setProfile(item)}
          >
            <Text style={styles.chipText}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>
          Aceito os termos
        </Text>

        <Switch
          value={terms}
          onValueChange={setTerms}
        />
      </View>

      {errors.terms && (
        <Text style={styles.error}>
          {errors.terms}
        </Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>
          {loading
            ? "Enviando..."
            : "Cadastrar"}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#1E293B",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  error: {
    color: "#EF4444",
    marginTop: 5,
    marginBottom: 5,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  chipsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },

  chip: {
    backgroundColor: "#1E293B",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 30,
  },

  activeChip: {
    backgroundColor: "#2563EB",
  },

  chipText: {
    color: "#fff",
    fontWeight: "bold",
  },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  switchText: {
    color: "#fff",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});