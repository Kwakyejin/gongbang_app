import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-navigation";
import data from "../assets/data.json";
import search from "../assets/Group.svg";
import { WithLocalSvg } from "react-native-svg";
import axios from "axios";

const SearchScreen = () => {
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState("");
  const [term, setTerm] = useState("");

  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      if (res.data.length > 0) {
        setPosts(res.data);
      } else {
        setPosts([]);
        setErr("No post found");
      }
    });
  };

  const renderPosts = (item) => {
    return (
      <View>
        <Text>
          {item.id}.{item.title}
        </Text>
        <Text>{item.body}</Text>
      </View>
    );
  };

  useEffect(() => {
    getPosts(term);
  }, [term]);

  return (
    <SafeAreaView>
      <View
        style={{
          height: "20%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 40,
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
            placeholder="검색어를 입력하세요"
            placeholderTextColor="#FFFFFF"
          />
        </View>
      </View>
      <View>
        <FlatList
          data={posts}
          renderItem={renderPosts}
          keyExtractor={(post) => post.id}
        />
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
