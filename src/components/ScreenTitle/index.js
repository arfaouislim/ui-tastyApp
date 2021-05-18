import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";

export default function ScreenTitle({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    padding: 5,
    textAlignVertical: "center",
    color: "#000",
    width: "95%",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderColor: "#79dcf1",
    borderWidth: 2,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});
