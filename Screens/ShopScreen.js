import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import trash from "../assets/iwwa_trash.svg";
import cart from "../assets/mdi-light_cart.svg";
import { Checkbox } from "react-native-paper";

let imagePath = require("../assets/달달코롱.png");
let image = require("../assets/아로마.png");

const ShopScreen = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  return (
    <SafeAreaView style={styles.style1}>
      <View style={styles.style2}>
        <Text
          style={{
            paddingTop: 2,
            fontSize: 30,
            fontWeight: "200",
            color: "#599B4F",
            paddingEnd: 5,
          }}
        >
          장바구니
        </Text>
        <WithLocalSvg width={34} height={34} asset={cart} />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "flex-end",
          width: "95%",
          paddingTop: 20,
        }}
      >
        <TouchableOpacity>
          <View style={styles.button}>
            <WithLocalSvg width={19} height={20} asset={trash} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "white",
                paddingStart: 2,
              }}
            >
              삭제하기
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 40,
        }}
      >
        <View style={styles.style3}>
          <Checkbox.Android
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
            color={"#599B4F"}
          />
          <View style={styles.box}>
            <Image
              style={{
                height: 200,
                width: 180,
              }}
              source={imagePath}
            />
          </View>
        </View>
        <View style={styles.style3}>
          <Checkbox.Android
            status={checked2 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked2(!checked2);
            }}
            color={"#599B4F"}
          />
          <View style={styles.box}>
            <Image
              style={{
                height: 200,
                width: 180,
              }}
              source={image}
            />
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.button2}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "white",
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
    paddingTop: 40,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingStart: 30,
    alignItems: "flex-start",
  },
  button: {
    backgroundColor: "#599B4F",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 89,
    height: 29,
    borderRadius: 29,
  },
  box: {
    backgroundColor: "#E1DFDF",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: "100%",
  },
  style3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  button2: {
    backgroundColor: "#599B4F",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: 204,
    height: 39,
    borderRadius: 29,
  },
});
