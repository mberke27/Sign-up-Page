import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Signup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#284656",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
