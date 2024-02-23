import { Button, Image, StyleSheet, Text, View } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {
  // const loadScene = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={gStyle.main}>
      <Image style={styles.image} source={{ uri: route.params.img }} />
      <Text style={[gStyle.title, styles.titltItem]}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
      {/* <Button title="Go back" onPress={loadScene} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#f55151",
  },
  titltItem: {
    fontSize: 25,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
