import React, { useState, useEffect, Component } from "react";
import { StyleSheet, FlatList, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-navigation";
import search from "../assets/Group.svg";
import { WithLocalSvg } from "react-native-svg";
import axios from "axios";

const SearchScreen = () => {
  const [filteredData, setfilteredData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    fetchPost();
    return () => {};
  }, []);

  const fetchPost = () => {
    const apiURL = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setfilteredData(responseJson);
        setmasterData(responseJson);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredData(newData);
      setsearch(text);
    } else {
      setfilteredData(masterData);
      setsearch(text);
    }
  };
  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemstyle}>
        {item.id}
        {"."}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }}
      />
    );
  };

  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            onChangeText={(input) => {
              searchFilter(input);
            }}
          />
        </View>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
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
  itemstyle: {
    padding: 15,
  },
});
