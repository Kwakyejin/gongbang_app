import React, { useState, useEffect, Component } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import search2 from "../assets/Group.svg";
import { WithLocalSvg } from "react-native-svg";
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
      for (const place of info.place) {
        if (place.indexOf(text) != -1 && !data.includes(info)) data.push(info);
      }
      for (const eat of info.can_eat_parts) {
        if (eat.indexOf(text) != -1 && !data.includes(info)) data.push(info);
      }
      for (const sname of info.study_name) {
        if (
          sname.toLowerCase().indexOf(text.toLowerCase()) != -1 &&
          !data.includes(info)
        )
          data.push(info);
      }
      for (const shape of info.shape) {
        if (shape.indexOf(text) != -1 && !data.includes(info)) data.push(info);
      }
    }
    setfilteredData(data);
    console.log(data);
  }, [text]);

  const ItemView = ({ item }) => {
    return (
      <View>
        <Text style={styles.itemstyle}>{item.name} </Text>
        <Text style={styles.itemstyle2}> 효능: {item.efficacy}</Text>
        <Text style={styles.itemstyle2}>
          {" "}
          식물을 볼 수 있는 달: {item.month}
        </Text>
        <Text style={styles.itemstyle2}>
          {" "}
          식용이 가능한 부분: {item.can_eat_parts}
        </Text>
        <Text style={styles.itemstyle2}>
          {" "}
          발견된 지역 in JEJU: {item.place}
        </Text>
        <Text style={styles.itemstyle2}> 학명: {item.study_name}</Text>
        <Text style={styles.itemstyle2}> 초(목)본: {item.shape}</Text>
      </View>
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
          height: "8%",
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
    display: "flex",
    fontWeight: "700",
  },
  itemstyle2: {
    paddingBottom: 4,
    paddingLeft: 3,
    display: "flex",
    fontWeight: "400",
  },
});
