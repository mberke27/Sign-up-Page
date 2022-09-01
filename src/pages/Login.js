import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Logo from "../components/Logo";
import Form from "../components/Form";
import Form2 from "../components/Form2";

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form2 />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <Text style={styles.signupButton}>Signup</Text>
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

