import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { gStyle } from "../styles/style";

export default function Main() {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Home page</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
