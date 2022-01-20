import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { Camera } from "expo-camera";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [Image, setImage] = useState(null);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(camera.cuurent);
      setImage(data.uri);
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.style1}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: "black",
          marginBottom: 10,
        }}
      >
        한 송이씩 찍을 수록 정확도가 올라갑니다!
      </Text>
      <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)} />
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}>
              {" "}
              화면전환{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => takePicture()}>
            <Text style={{ fontSize: 18, fontWeight: "400", color: "#FFFFFF" }}>
              {" "}
              사진 찍기{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  style1: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E1DFDF",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: 310,
    height: 325,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#599B4F",
    marginTop: 10,
    width: 310,
    height: 40,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
