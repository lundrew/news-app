import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/home/header/Header";
import Articles from "../components/home/articles/Articles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Articles />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
