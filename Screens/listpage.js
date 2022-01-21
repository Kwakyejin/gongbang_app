import React, { Component } from "react";
import ItemCard from "../components/itemcard";
import { Text, View, StyleSheet } from "react-native";

class Listpage extends Component {
  state = {};
  render() {
    const { Itemcard } = this.props;
    return (
      <View>
        {Itemcard &&
          Itemcard.map((itemdata) => {
            return (
              <ItemCard
                ImageURL={itemdata.ImageURL}
                BrandName={itemdata.BrandName}
                GoodsName={itemdata.GoodsName}
              />
            );
          })}
      </View>
    );
  }
}

export default Listpage;
