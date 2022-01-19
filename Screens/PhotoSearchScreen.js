import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import camera from "../assets/bi_camera-fill.svg";
import photo from "../assets/bi_image.svg";
import { WithLocalSvg } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";

const PhotoSearchScreen = ({}) => {
  const [image, setImage] = useState(null);
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("권한을 승인해주십시오.");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!result.cancelled) {
      setImage(result.base64);
    }
  };

  return (
    <SafeAreaView style={styles.style1}>
      <SafeAreaView style={styles.style2}>
        <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
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
        <TouchableOpacity onPress={() => pickImage}>
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
