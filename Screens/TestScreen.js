import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import test from "../assets/wpf_survey.svg";
import { WithLocalSvg } from "react-native-svg";

const TestScreen = () => {
  return (
    <SafeAreaView style={styles.style1}>
      <SafeAreaView style={styles.style2}>
        <TouchableOpacity>
          <View style={styles.card}>
            <WithLocalSvg width={115} height={113} asset={test} />
            <Text
              style={{
                fontSize: 24,
                fontWeight: "400",
                paddingTop: 5,
              }}
            >
              SNTI 검사
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  style1: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  style2: {
    width: "100%",
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  card: {
    backgroundColor: "#E1DFDF",
    alignItems: "center",
    width: 210,
    height: 210,
    borderRadius: 105,
    marginTop: 30,
    paddingTop: 32,
    paddingLeft: 2,
  },
});
