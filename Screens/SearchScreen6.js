import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React, { Component } from "react";
import getplants, { getUsers } from "./";
import { Searchbar } from "react-native-paper";

export class SearchScreen6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      err: null,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    getplants()
      .then((plants) => {
        this.setState({
          loading: false,
          data: plants,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  handleSearch = (text) => {
    console.log;
    this.setState({ query: text });
  };
  renderHeader = () => {
    return (
      <Searchbar
        placeholder="검색어를 입력하세요"
        lightTheme
        round
        onChangeText={this.handleSearch}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView>
        <StatusBar style="light-content" />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{`${item.name.first} ${item.name.last}`}</ListItem.Title>
                <ListItem.Subtitle>{item.effi}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          )}
          keyExtractor={(item) => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />
      </SafeAreaView>
    );
  }
}

export default SearchScreen6;
