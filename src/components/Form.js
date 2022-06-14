import React, { Component } from "react";
import {
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder="Name"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Surname"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Join now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    width: 300,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1c313a",
    width: 300,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
});
