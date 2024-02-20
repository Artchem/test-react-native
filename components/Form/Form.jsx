import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Form({ addTask }) {
  const [textInput, setTextInput] = useState("");

  const onChange = (textInput) => {
    setTextInput(textInput);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Write task..."
      />
      <Button title="Add task" onPress={() => addTask(textInput)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
});
