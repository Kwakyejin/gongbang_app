import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import data from "../assets/data_F.json";
import { WithLocalSvg } from "react-native-svg";
import search from "../assets/Group.svg";

const SearchScreen5 = () => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "35%",
        }}
      >
        <View
          style={{
            backgroundColor: "#599B4F",
            height: 39,
            width: 324,
            borderRadius: 29,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
          }}
        >
          <WithLocalSvg width={16.61} height={16.61} asset={search} />
          <TextInput
            style={styles.textInput}
            value={search}
            placeholder="검색어를 입력하세요"
            placeholderTextColor="#FFFFFF"
          />
        </View>
      </View>
    </View>
  );
};

export default SearchScreen5;

const styles = StyleSheet.create({});
