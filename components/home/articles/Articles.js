import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import useFetch from "../../../hook/useFetch";
// import data from "./mock.json";

const Articles = () => {
  const { data, isLoading, error, refetch } = useFetch();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {data.map((item) => (
          <View style={styles.textContainer} key={item.id}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.summaryText}>{item.summary}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  textContainer: {
    width: "80%",
    padding: 20,
  },
  titleText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  summaryText: {
    fontSize: 12,
    fontWeight: "light",
    color: "#000",
    paddingTop: 10,
  },
  scrollView: {
    width: "100%",
    height: "0%",
  },
});

export default Articles;
