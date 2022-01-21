import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import logo from "../assets/logo.svg";
import { WithLocalSvg } from "react-native-svg";
import flower from "../assets/flower.svg";
import { ScrollView } from "react-native-gesture-handler";
import flower1 from "../assets/sonbigiflower.svg";
import flower2 from "../assets/bigjolongflower.svg";
import flower3 from "../assets/memelflower.svg";

let imagePath = require("../assets/참꽃코롱.png");
const HomeScreen = () => {
  return (
    <>
      <ScrollView style={{ height: 200, backgroundColor: "#FFFFFF" }}>
        <SafeAreaView style={styles.style1}>
          <WithLocalSvg width={157} height={99} asset={logo} />
        </SafeAreaView>
        <SafeAreaView style={styles.style2}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "200",
              color: "#599B4F",
              marginLeft: 5,
            }}
          >
            오늘의 자생식물
          </Text>
          <View style={styles.style3}>
            <View style={styles.style5}>
              <WithLocalSvg width={190} height={166} asset={flower} />
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
        </SafeAreaView>
        <SafeAreaView style={styles.style2}>
          <Text
            style={{
              paddingTop: 20,
              fontSize: 14,
              fontWeight: "200",
              color: "#599B4F",
              marginLeft: 5,
            }}
          >
            풋내음 공방 추천
          </Text>
          <View style={styles.style3}>
            <View style={styles.style6}>
              <Image
                style={{
                  height: 200,
                  width: 180,
                }}
                source={imagePath}
              />
            </View>
            <View style={styles.style5}>
              <Text style={{ fontSize: 14, fontWeight: "700", marginLeft: 8 }}>
                향: 허브향같은 아로마향
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "700", marginLeft: 8 }}>
                지속시간: 3~5시간
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "700", marginLeft: 8 }}>
                추천 SNTI 유형: 순비기나무타입
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 100,
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                height: 111,
                width: 112,
                backgroundColor: "rgba(89, 155, 79, 0.4)",
                borderRadius: 112,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 5,
              }}
            >
              <WithLocalSvg width={98} height={100} asset={flower1} />
            </View>

            <View
              style={{
                height: 111,
                width: 112,
                backgroundColor: "rgba(89, 155, 79, 0.4)",
                borderRadius: 112,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <WithLocalSvg width={100} height={100} asset={flower2} />
            </View>

            <View
              style={{
                height: 111,
                width: 112,
                backgroundColor: "rgba(89, 155, 79, 0.4)",
                borderRadius: 112,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <WithLocalSvg width={100} height={100} asset={flower3} />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 30,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              paddingLeft: 40,
              paddingRight: 40,
            }}
          >
            <Text>순비기타입</Text>
            <Text>큰조롱타입</Text>
            <Text>메밀타입</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  style1: {
    width: "100%",
    height: "13%",
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
    width: 200,
    flexDirection: "row",
  },
  style4: {
    height: 166,
    width: 188,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#E1DFDF",
  },
  style5: {
    height: 188,
    width: 195,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#E1DFDF",
    marginRight: 1,
  },
  style6: {
    height: 188,
    width: 195,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#E1DFDF",
    marginRight: 1,
  },
});
