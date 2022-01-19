
import { StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    Alert, } from 'react-native'
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../lib/API";

function GalleryScreen({ navigation }) {
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
        <View style={styles.container}>
          <View style={styles.body}>
            {image ? (
              <TouchableOpacity
                style={{
                  borderRadius: 125,
                  borderTopWidth: 2,
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderColor: "#C8D7FF",
                }}
                onPress={pickImage}
              >
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  borderRadius: 125,
                  borderTopWidth: 2,
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderColor: "#C8D7FF",
                }}
                onPress={pickImage}
              >
              </TouchableOpacity>
            )}
          </View>
        </View>
      
    );
  }


export default GalleryScreen


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  title: {
    width: "100%",
    height: 100,
  },
  body: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Step1Screen;
