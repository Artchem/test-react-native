import { Formik } from "formik";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { gStyle } from "../styles/style";

export default function FormArticle({ addArticle }) {
  return (
    <View style={gStyle.main}>
      <Formik
        initialValues={{ name: "", anons: "", full: "", img: "" }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
          console.log("values :>> ", values);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldTouched,
          handleBlur,
        }) => (
          <View style={styles.formArticle}>
            <TextInput
              style={styles.input}
              value={values.name}
              placeholder="Input name"
              placeholderTextColor={"#333"}
              onChangeText={handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={values.anons}
              multiline
              placeholder="Input anons"
              placeholderTextColor={"#333"}
              onChangeText={handleChange("anons")}
            />
            <TextInput
              style={styles.input}
              value={values.full}
              multiline
              placeholder="Input full"
              placeholderTextColor={"#333"}
              onChangeText={handleChange("full")}
              onBlur={(v) => handleBlur("full", v)}
            />
            <TextInput
              style={styles.input}
              value={values.img}
              placeholder="Input img"
              placeholderTextColor={"#333"}
              onChangeText={handleChange("img")}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formArticle: {
    color: "blue",
    // backgroundColor: "#ecf0f1",
  },
  input: {
    // color: "blue",
    // fontFamily: "mt-bold",

    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    borderColor: "silver",
    borderRadius: 5,
  },
});
