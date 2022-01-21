import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import cart from "../assets/mdi-light_cart.svg";
import bell from "../assets/mdi-light_bell.svg";
import bigaccount from "../assets/mdi-light_account-1.svg";
import smallaccount from "../assets/mdi-light_account.svg";
import flower from "../assets/flower.svg";

let image = require("../assets/perfume.png");

const MypageScreen = () => {
  return (
    <>
      <ScrollView backgroundColor="white">
        <SafeAreaView style={styles1.style3}>
          <SafeAreaView style={styles1.style2}>
            <WithLocalSvg width={24} height={24} asset={bell} />
            <WithLocalSvg width={24} height={24} asset={cart} />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles1.style4}>
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
            <View style={styles1.cardImageContainer}>
              <WithLocalSvg width={128} height={133} asset={bigaccount} />
            </View>
          </TouchableOpacity>
          <View style={styles1.style5}>
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
        </SafeAreaView>
        <View style={styles1.style6}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "200",
              color: "#599B4F",
              marginLeft: 3,
            }}
          >
            최근 본 자생식물
          </Text>
          <View style={styles.style3}>
            <View style={styles.style5}>
              <WithLocalSvg width={200} height={166} asset={flower} />
            </View>
            <View style={styles.style5}>
              <Text style={{ fontSize: 14, fontWeight: "700", marginLeft: 5 }}>
                이름: 메밀
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 5 }}>
                초본/목본: 초본
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 5 }}>
                사진의 장소: 성산 [평지]
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 5 }}>
                학술명: Fagopyrum esculentum Moench, 1794.,
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 5 }}>
                식용 가능 부위: 잎, 줄기, 꽃, 씨앗
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 5 }}>
                피는 시기: 6월
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 8 }}>
                효능: 항염증, 면역증진, 항산화
              </Text>
            </View>
          </View>
        </View>
        <View style={styles1.style6}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "200",
              color: "#599B4F",
              marginLeft: 3,
            }}
          >
            최근 본 상품
          </Text>
          <View style={styles.style3}>
            <View style={styles.style5}>
              <Image
                style={{
                  height: 200,
                  width: 180,
                }}
                source={image}
              />
            </View>
            <View style={styles.style5}>
              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: "700" }}>
                은은한 풀과 자연냄새를 좋아하는 타입인 메밀타입분들에게
                추천드리는 제품입니다.
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 8 }}>
                또 다른 유사아이템으로 메밀코롱 등이 있습니다.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MypageScreen;

const styles1 = StyleSheet.create({
  style2: {
    width: "15%",
    height: "6%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  style3: {
    width: "98%",
    height: "8%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
  },
  style4: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  cardImageContainer: {
    backgroundColor: "#E1DFDF",
    display: "flex",
    alignItems: "center",
    width: 210,
    height: 210,
    borderRadius: 105,
    marginTop: 5,
    paddingTop: 32,
    paddingLeft: 2,
  },
  style5: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 4,
  },
  style6: {
    width: "50%",
    height: "30%",
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: 8,
  },
});

const styles = StyleSheet.create({
  style1: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
  },
  style2: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  style3: {
    display: "flex",
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "row",
  },
  style4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#E1DFDF",
  },
  style5: {
    height: 166,
    width: 195,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#E1DFDF",
    marginRight: 1,
  },
});
