import React, { useState, useEffect, Component } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-navigation";
import search from "../assets/Group.svg";
import { WithLocalSvg } from "react-native-svg";
import axios from "axios";

const loadItem = async () => {
  axios
    .get("https://8889dda3-8dd2-44d3-bbe4-b78f929506aa.mock.pstmn.io/plants")
    .then(({ data }) => {
      this.setState({
        loading: true,
        ItemList: data.Item,
      });
    })
    .catch((e) => {
      console.error("error 발생: ", e);
      this.setState({
        loading: false,
      });
    });
};

const SearchScreen = () => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  textInput: {
    height: 39,
    width: 324,
    fontWeight: "400",
    fontSize: 18,
    color: "white",
    paddingLeft: 5,
  },
});
