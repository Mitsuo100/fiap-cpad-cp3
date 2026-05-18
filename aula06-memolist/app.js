import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
  StyleSheet,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  async function saveTasks() {
    await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
  }

  async function loadTasks() {
    const data = await AsyncStorage.getItem("@tasks");

    if (data) {
      setTasks(JSON.parse(data));
    }
  }

  function addTask() {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: task,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function toggleTask(id) {
    const updated = tasks.map((item) =>
      item.id === id
        ? { ...item, done: !item.done }
        : item
    );

    setTasks(updated);
  }

  async function clearAll() {
    setTasks([]);
    await AsyncStorage.removeItem("@tasks");
  }

  const pendingTasks = tasks.filter((item) => !item.done).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MemoList</Text>

      <Text style={styles.pending}>
        Pendentes: {pendingTasks}
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nova tarefa"
          placeholderTextColor="#94A3B8"
          value={task}
          onChangeText={setTask}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addTask}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text
              style={[
                styles.taskText,
                item.done && styles.done,
              ]}
            >
              {item.title}
            </Text>

            <Switch
              value={item.done}
              onValueChange={() => toggleTask(item.id)}
            />
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.clearButton}
        onPress={clearAll}
      >
        <Text style={styles.clearText}>
          Limpar tudo
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
  },

  pending: {
    color: "#38BDF8",
    marginVertical: 15,
    fontSize: 18,
  },

  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    backgroundColor: "#1E293B",
    borderRadius: 10,
    padding: 15,
    color: "#fff",
  },

  addButton: {
    backgroundColor: "#2563EB",
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  task: {
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  taskText: {
    color: "#fff",
    fontSize: 16,
  },

  done: {
    textDecorationLine: "line-through",
    color: "#94A3B8",
  },

  clearButton: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  clearText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});