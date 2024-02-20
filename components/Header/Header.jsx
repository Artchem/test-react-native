import { Alert, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Work list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 70,
    height: 100,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
