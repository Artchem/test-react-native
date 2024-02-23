import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import Main from "./components/Main";
import Navigate from "./components/navigate";

// import { useState } from "react";

SplashScreen.preventAutoHideAsync();
// const fonts = () =>
//   Font.loadAsync({
//     "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
//     "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
//   });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
          "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
        });
      } catch (error) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <View style={styles.mainBlock} onLayout={onLayout}>
      <Navigate />
    </View>
  );
}

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    // backgroundColor: "yellow",
  },
});

/////////////////////////////////////////////////////////////////////////////////////

///////////////////  Todo

// // import { StatusBar } from "expo-status-bar";
// import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
// // import { img } from "./assets/icon.png";
// import { useFonts } from "expo-font";
// import { useState } from "react";
// import Header from "./components/Header/Header";
// import ListItem from "./components/List/ListItem";
// import Form from "./components/Form/Form";

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "Montserrat-Medium": require("./assets/fonts/Montserrat-Regular.ttf"),
//   });

//   const [listOfItems, setListOfItems] = useState([
//     { text: "Buy milk", key: 1 },
//     { text: "Wash car", key: 2 },
//     { text: "Buy potatos", key: 3 },
//     { text: "Walk dog", key: 4 },
//   ]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   // if (Platform.OS === "ios") {
//   // }
//   const addTask = (textNew) => {
//     setListOfItems((list) => {
//       return [
//         { text: textNew, key: Math.random().toString(36).substring(7) },
//         ...list,
//       ];
//     });
//   };

//   const deleteTask = (key) => {
//     setListOfItems((list) => {
//       return list.filter((listOfItems) => listOfItems.key !== key);
//     });
//   };

//   return (
//     <View style={styles.mainBlock}>
//       <Header />
//       <Form addTask={addTask} />
//       <View>
//         <FlatList
//           data={listOfItems}
//           renderItem={({ item }) => (
//             <ListItem el={item} deleteTask={deleteTask} />
//           )}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainBlock: {
//     // flex: 1,
//     // flexDirection: "row",
//     // justifyContent: "space-between",
//     // alignItems: "center",
//     // backgroundColor: "yellow",
//   },
//   box: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//   },
// });

//////////////////////////////////////////////////////////////////////////////////////

//////////   Flex          /////////////////////

// const handleButton1 = () =>
//   Alert.alert("test1", "Main message", [
//     { text: "yes", onPress: () => console.log("yes button") },
//     { text: "no", onPress: () => console.log("no button") },
//   ]);

// const handleButton2 = () =>
//   Alert.prompt("test1", "Main message", (text) => console.log(text));

// if (Platform.OS === "ios") {
// }

//  return (
//    <SafeAreaView style={styles.mainBlock}>
//      <View style={[styles.box, { backgroundColor: "blue" }]}></View>
//      <View
//        style={[
//          styles.box,
//          { backgroundColor: "red", height: 150, alignSelf: "flex-start" },
//        ]}
//      ></View>
//      <View style={[styles.box, { backgroundColor: "green" }]}></View>
//    </SafeAreaView>
//  );

// const styles = StyleSheet.create({
//   mainBlock: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     // backgroundColor: "yellow",
//   },
//   box: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//   },
// });

////////////////////////////////////////////////////////////////////////////////////

//////////////////////////   Базовые
// return (
//     <SafeAreaView style={styles.container}>
//       <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 28 }}>
//         Hello World!!!!!!!!!!
//       </Text>

//       <Button title={"Click me"} onPress={handleButton1} />
//       <Button title={"Buttton 2"} onPress={handleButton2} />

//       <TouchableWithoutFeedback onPress={handleButton1}>
//         <Image
//           // blurRadius={7}
//           source={require("./assets/favicon.png")}
//           // source={{
//           //   width: 200,
//           //   height: 150,
//           //   uri: "https://i.pinimg.com/236x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg",
//           // }}
//           style={{ width: 50, height: 50 }}
//         />
//       </TouchableWithoutFeedback>

//       <View style={styles.box}>
//         <Text>Hello World!!!!!!!!!!</Text>
//       </View>

//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },

//   box: {
//     backgroundColor: "yellow",
//     width: "50%",
//     height: 150,
//     opacity: 0.5,
//     borderWidth: "2",
//     borderColor: "red",
//     borderStyle: "dotted",

//     // position: "absolute",
//     // top: 250,
//     // left: 50,

//     position: "absolute",
//     top: Platform.OS === "ios" ? 250 : 30,
//     left: 50,
//   },
// });

////////////////////////////////////////////////////////////////////////////////////

// const COURSES = [
//   {
//     id: "45k6-j54k-4jth1",
//     title: "HTML",
//   },
//   {
//     id: "4116-jfk5-43rh2",
//     title: "JavaScript",
//   },
//   {
//     id: "4d16-5tt5-4j553",
//     title: "React",
//   },
//   {
//     id: "LG16-ant5-0J254",
//     title: "React Native",
//   },
//   {
//     id: "45k6-j54k-4jth5",
//     title: "HTML",
//   },
//   {
//     id: "4116-jfk5-43rh6",
//     title: "JavaScript",
//   },
//   {
//     id: "4d16-5tt5-4j557",
//     title: "React",
//   },
//   {
//     id: "LG16-ant5-0J258",
//     title: "React Native",
//   },
//   {
//     id: "45k6-j54k-4jth9",
//     title: "HTML",
//   },
//   {
//     id: "4116-jfk5-43rh10",
//     title: "JavaScript",
//   },
//   {
//     id: "4d16-5tt5-4j5511",
//     title: "React",
//   },
//   {
//     id: "LG16-ant5-0J2512",
//     title: "React Native",
//   },
//   {
//     id: "45k6-j54k-4jth13",
//     title: "HTML",
//   },
// ];

// export default function App() {
//   const [courses, setCourses] = useState(COURSES);

//   const [fontsLoaded] = useFonts({
//     "Montserrat-Medium": require("./assets/fonts/Montserrat-Regular.ttf"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <ScrollView>
//         {courses.map((course) => (
//           <Text key={course.id}>{course.title}</Text>
//         ))}
//       </ScrollView> */}
//       <FlatList
//         data={courses}
//         renderItem={({ item }) => (
//           <Text
//             onPress={() => console.log("Text pressed")}
//             style={{ fontFamily: "Montserrat-Medium", fontSize: 28 }}
//           >
//             {item.title}
//           </Text>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// }
