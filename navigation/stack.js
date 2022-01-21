import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ShopScreen from "../Screens/ShopScreen";
import Camera from "../Screens/CameraScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const stack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
