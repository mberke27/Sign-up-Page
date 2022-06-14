import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 137, height: 69 }}
          source={require("../images/logo.png")}
        />
        <Text style={styles.logoText}> Welcome to CereApp </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoText: {
    fontSize: 18,
    color: "rgba(255,255,235,0.7)",
    marginVertical: 15,
    color: "#FF5F1F",
  },
});
