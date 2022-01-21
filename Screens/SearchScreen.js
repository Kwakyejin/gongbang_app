import React, { useState, useEffect, Component } from "react";
import { StyleSheet, FlatList, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-navigation";
import search2 from "../assets/Group.svg";
import { WithLocalSvg } from "react-native-svg";
import axios from "axios";
import { plant } from "../assets/data_F.json";

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => {
    const data = [];
    for (const info of plant) {
      if (info.name.indexOf(text) != -1 || info.month == text) data.push(info);
      for (const effect of info.efficacy) {
        if (effect.indexOf(text) != -1 && !data.includes(info)) data.push(info);
      }
    }
    setfilteredData(data);
    console.log(data);
  }, [text]);

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemstyle}>
        {item.id}
        {"."}
        {item.name.toUpperCase()}
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
    <SafeAreaView style={{ flex: 1 }}>
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
          <WithLocalSvg width={16.61} height={16.61} asset={search2} />
          <TextInput
            style={styles.textInput}
            value={text}
            placeholder="검색어를 입력하세요"
            placeholderTextColor="#FFFFFF"
            onChangeText={(input) => {
              setText(input);
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
    width: 304,
    fontWeight: "400",
    fontSize: 18,
    color: "white",
    paddingLeft: 5,
  },
  itemstyle: {
    padding: 15,
  },
});
