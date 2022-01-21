import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import camera from "../assets/bi_camera-fill.svg";
import photo from "../assets/bi_image.svg";
import { WithLocalSvg } from "react-native-svg";
import {} from "@react-navigation/native";
import GalleryScreen from "./GalleryScreen";
import CameraScreen from "./CameraScreen";
import * as ImagePicker from "expo-image-picker";
import flowerCheck from "./flowerCheck";

const PhotoSearchScreen = ({ navigation }) => {
  const [Image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  useEffect(async () => {
    if (Image != null) {
      const resultInfo = await flowerCheck(Image, 0.55);
      console.log(resultInfo);
      setImage(null);
      if (resultInfo != null) {
        alert("검색결과 " + resultInfo + "입니다");
      } else {
        alert("검색결과 해당하는 식물이 없습니다");
      }
    }
  }, [Image]);

  return (
    <SafeAreaView style={styles.style1}>
      <SafeAreaView style={styles.style2}>
        <TouchableOpacity onPress={() => navigation.navigate("카메라")}>
          <View style={styles.card}>
            <WithLocalSvg width={100} height={110} asset={camera} />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              직접찍기
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pickImage()}>
          <View style={styles.card}>
            <WithLocalSvg width={100} height={110} asset={photo} />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              사진첩에서 들고오기
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default PhotoSearchScreen;

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
  style5: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 4,
  },
});
