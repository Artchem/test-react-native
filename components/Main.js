import { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
} from "react-native";
import { gStyle } from "../styles/style";
import FormArticle from "./FormArticle";

export default function Main({ navigation }) {
  // const loadScene = () => {
  //   navigation.navigate("FullInfo");
  // };

  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!!",
      full: "Google is cool!",
      key: "1",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png",
    },
    {
      name: "Apple",
      anons: "Apple!!!!",
      full: "Apple is cool!",
      key: "2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18mlDNgWeIBExOtwbWGHSPkC3FQjG6n66IA&usqp=CAU",
    },
    {
      name: "FaceBook",
      anons: "FaceBook!!!!",
      full: "FaceBook is cool!",
      key: "3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fmrPxxAK0pbMLQexg7X8XJlaAtUa_XpPKQ&usqp=CAU",
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    article.key = Math.random().toString();
    setNews((list) => {
      return [article, ...list];
    });
    setModalWindow(false);
  };

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <AntDesign
            name="closecircleo"
            size={34}
            color="red"
            style={styles.iconClose}
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Form add articles</Text>
          <FormArticle addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle-sharp"
        size={34}
        color="green"
        style={styles.iconAdd}
        onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyle.title, styles.header]}>Main page</Text>

      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("FullInfo", item);
            }}
          >
            <Image style={styles.image} source={{ uri: item.img }} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <Button title="Open page" onPress={loadScene} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  image: {
    width: "100%",
    height: 200,
  },
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  iconClose: {
    textAlign: "center",
  },
});
