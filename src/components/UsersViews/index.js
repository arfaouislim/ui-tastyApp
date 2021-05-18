import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function UsersViews({ views }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nbViews}>{views}</Text>
      <FontAwesome5 name="eye" size={15} color="#A3A3A3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 15,
  },
  nbViews: {
    marginRight: 5,
    fontSize: 12,
    //fontWeight: "bold",
    color: "#A3A3A3",
  },
});
