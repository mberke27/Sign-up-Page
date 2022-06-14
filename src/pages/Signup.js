import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Logo from "../components/Logo";
import Form from "../components/Form";

export default class Signup extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <Text style={styles.signupButton}>Sign in</Text>
        </View>
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
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row",
    marginVertical: 12,
  },
  signupText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 6,
  },
});
