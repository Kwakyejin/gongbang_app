import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import trash from "../assets/iwwa_trash.svg";
import cart from "../assets/mdi-light_cart.svg";

const ShopScreen = () => {
  return (
    <SafeAreaView style={styles.style1}>
      <View style={styles.style2}>
        <Text
          style={{
            paddingTop: 2,
            fontSize: 18,
            fontWeight: "200",
            color: "#599B4F",
            paddingEnd: 5,
          }}
        >
          장바구니
        </Text>
        <WithLocalSvg width={24} height={24} asset={cart} />
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <WithLocalSvg width={19} height={20} asset={trash} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "white",
              paddingStart: 3,
              paddingTop: 2.3,
            }}
          >
            삭제하기
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.style3}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={styles.style4}>
        <TouchableOpacity>
          <View style={styles.button2}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "white",
                paddingStart: 70,
                paddingTop: 10,
              }}
            >
              구매하기
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  style1: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  style2: {
    paddingTop: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingStart: 50,
    alignItems: "flex-start",
  },
  button: {
    backgroundColor: "#599B4F",
    display: "flex",
    flexDirection: "row",
    marginStart: 270,
    paddingTop: 5,
    paddingStart: 8,
    width: 89,
    height: 29,
    borderRadius: 29,
  },
  box: {
    backgroundColor: "#E1DFDF",
    display: "flex",
    flexDirection: "column",
    width: 286,
    height: 166,
    alignItems: "flex-start",
    marginBottom: 50,
  },
  style3: {
    paddingStart: 80,
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  button2: {
    backgroundColor: "#599B4F",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    width: 204,
    height: 39,
    borderRadius: 29,
  },
  style4: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});
