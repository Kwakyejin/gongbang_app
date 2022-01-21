import { Text, View, TextInput, StyleSheet } from "react-native";
import React, { Component } from "react";
import Listpage from "./listpage";
import search from "../assets/Group.svg";
import { WithLocalSvg } from "react-native-svg";

export class SearchScreen4 extends Component {
  state = {
    loading: false,
    ItemList: [],
  };

  loadItem = async () => {
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

  componentDidMount() {
    this.loadItem();
  }
  render() {
    const { ItemList } = this.state;
    console.log(ItemList);

    return (
      <View>
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
        <Listpage Itemcard={ItemList} />
      </View>
    );
  }
}

export default SearchScreen4;
