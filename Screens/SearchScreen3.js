import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { ActivityIndicator } from "react-native-paper";

export class SearchScreen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      dataSource: null,
    };
  }
  componentDidMount() {
    return fetch(
      "https://8889dda3-8dd2-44d3-bbe4-b78f929506aa.mock.pstmn.io/plants"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isloading: false,
          datasource: responseJson.plants,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let plants = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.item}>
            <Text>{val.name}</Text>
          </View>
        );
      });
      return <View style={styles.container}>{plants}</View>;
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  item: {
    flex: 1,
    alignSelf: "stretch",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
export default SearchScreen3;
