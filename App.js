import { StatusBar } from "expo-status-bar";
import React from "react";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <>
      <StackNavigator />
      <StatusBar style="auto" />
    </>
  );
}
