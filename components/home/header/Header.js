import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CurrentLocation from "./CurrentLocation";

const Header = () => {
  const date = new Date();
  const currentDay = date.getDate();
  const options = { month: "long" };
  const currentMonth = date.toLocaleString("default", options);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textDate}>
          {currentMonth} {currentDay}
        </Text>
      </View>
      <View>
        <Text styles={styles.textLocation}>
          <CurrentLocation />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 10,
    backgroundColor: "#fff",
    paddingLeft: 12,
    padding: 10,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  textDate: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  textLocation: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Header;
