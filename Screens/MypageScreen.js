import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import cart from "../assets/mdi-light_cart.svg";
import bell from "../assets/mdi-light_bell.svg";
import bigaccount from "../assets/mdi-light_account-1.svg";
import smallaccount from "../assets/mdi-light_account.svg";

const MypageScreen = () => {
  return (
    <SafeAreaView style={styles.style1}>
      <SafeAreaView style={styles.style3}>
        <SafeAreaView style={styles.style2}>
          <WithLocalSvg width={24} height={24} asset={bell} />
          <WithLocalSvg width={24} height={24} asset={cart} />
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.style4}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "200",
            color: "#599B4F",
          }}
        >
          SNTI 결과
        </Text>
        <TouchableOpacity>
          <View style={styles.cardImageContainer}>
            <WithLocalSvg width={128} height={133} asset={bigaccount} />
          </View>
        </TouchableOpacity>
        <View style={styles.style5}>
          <WithLocalSvg width={24} height={24} asset={smallaccount} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "200",
              color: "#599B4F",
              paddingTop: 3,
              paddingLeft: 3,
            }}
          >
            닉네임
          </Text>
        </View>
        <View style={styles.style6}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "200",
              color: "#599B4F",
            }}
          >
            최근 본 자생식물
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "200",
              color: "#599B4F",
            }}
          >
            최근 본 상품
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default MypageScreen;

const styles = StyleSheet.create({
  style1: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  style2: {
    width: 63,
    height: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  style3: {
    width: "98%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
  },
  style4: {
    width: "100%",
    height: 100,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  cardImageContainer: {
    backgroundColor: "#E1DFDF",
    alignItems: "center",
    width: 210,
    height: 210,
    borderRadius: 105,
    marginTop: 30,
    paddingTop: 32,
    paddingLeft: 2,
  },
  style5: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 4,
  },
  style6: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: 8,
    paddingLeft: 4,
  },
});
