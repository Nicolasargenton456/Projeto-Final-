import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
