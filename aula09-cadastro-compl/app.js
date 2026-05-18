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
  ActivityIndicator,
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
  const [profile, setProfile] = useState("");
  const [terms, setTerms] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  function validate() {
    let newErrors = {};

    if (!name) {
      newErrors.name = "Digite seu nome";
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

    if (!profile) {
      newErrors.profile = "Selecione um perfil";
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
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
      style={styles.container}
    >
      <Text style={styles.title}>
        Cadastro
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
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#94A3B8"
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
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#94A3B8"
      />

      {errors.phone && (
        <Text style={styles.error}>
          {errors.phone}
        </Text>
      )}

      <Text style={styles.label}>
        Perfil
      </Text>

      <View style={styles.chips}>
        {["Estudante", "Profissional", "Freelancer"].map(
          (item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.chip,
                profile === item &&
                  styles.chipSelected,
              ]}
              onPress={() => setProfile(item)}
            >
              <Text style={styles.chipText}>
                {item}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>

      {errors.profile && (
        <Text style={styles.error}>
          {errors.profile}
        </Text>
      )}

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
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            Cadastrar
          </Text>
        )}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#1F2937",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
    marginTop: 10,
  },

  error: {
    color: "#EF4444",
    marginTop: 5,
  },

  label: {
    color: "#fff",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
  },

  chips: {
    flexDirection: "row",
    gap: 10,
  },

  chip: {
    backgroundColor: "#374151",
    padding: 12,
    borderRadius: 20,
  },

  chipSelected: {
    backgroundColor: "#2563EB",
  },

  chipText: {
    color: "#fff",
  },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    alignItems: "center",
  },

  switchText: {
    color: "#fff",
  },

  button: {
    backgroundColor: "#22C55E",
    padding: 15,
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