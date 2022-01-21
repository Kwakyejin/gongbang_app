import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View, Image, TouableOpacity } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import MypageScreen from "../Screens/MypageScreen";
import PhotoScreen from "../Screens/PhotoSearchScreen";
import SearchScreen from "../Screens/SearchScreen";
import ShopScreen from "../Screens/ShopScreen";
import TestScreen from "../Screens/TestScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MainScreen from "../Screens/HomeScreen";
import CameraScreen from "../Screens/CameraScreen";

const Tab = createBottomTabNavigator();

const Tabs = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        name="홈"
        component={MainScreen}
        options={{
          tabBarIcon: ({ tabBarActiveTintColor, color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
              active={tabBarActiveTintColor}
            />
          ),
          tabBarActiveTintColor: "#3bc726",
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MypageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#3bc726",
        }}
      />
      <Tab.Screen
        name="사진 검색"
        component={PhotoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="camera-enhance"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: "#3bc726",
        }}
      />
      <Tab.Screen
        name="통합 검색"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="card-search"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: "#3bc726",
        }}
      />
      <Tab.Screen
        name="쇼핑"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#3bc726",
        }}
      />
      <Tab.Screen
        name="검사"
        component={TestScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-check-outline"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: "#3bc726",
        }}
      />
      <Tab.Screen
        name="카메라"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="camera-plus"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: "#3bc726",
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#76ff61",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
