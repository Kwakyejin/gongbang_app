import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import logo from "../assets/logo.svg";
import { WithLocalSvg } from "react-native-svg";

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.style1}>
        <WithLocalSvg width={157} height={99} asset={logo} />
      </SafeAreaView>
      <SafeAreaView style={styles.style2}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "200",
            color: "#599B4F",
          }}
        >
          오늘의 자생식물
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.style2}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "200",
            color: "#599B4F",
          }}
        >
          풋내음 공방 추천
        </Text>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  style1: {
    width: "100%",
    height: 99,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  style2: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
});
