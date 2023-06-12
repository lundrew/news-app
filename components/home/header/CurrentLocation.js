import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

const CurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      await fetchCityName(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchCityName = async (latitude, longitude) => {
    try {
      let geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
      let city = geocode[0].city;
      setCity(city);
    } catch (error) {
      console.log("Error fetching city name:", error);
    }
  };

  let text = "";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    if (city) {
      text += `${city}`;
    }
  }
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "left",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#808080",
  },
});

export default CurrentLocation;
