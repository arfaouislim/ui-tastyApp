//@react
import React from "react";
//@react-native
import { TouchableOpacity, Modal, StyleSheet, Text, View } from "react-native";

export default function Button({ icon, title, active, handlePress }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <View>{icon}</View>
        <Text style={[styles.text, active ? styles.active : null]}>
          {title}
        </Text>
        <View
          style={[
            styles.status,
            active ? { backgroundColor: "#21c3e8" } : { display: "none" },
          ]}
        ></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    //backgroundColor: "pink",
    padding: 5,
    height: "100%",
    width: 80,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 11,
    color: "#000",
  },
  status: {
    position: "absolute",
    bottom: 0,
    height: 6,
    width: "100%",
    borderRadius: 100,
  },
  active: {
    color: "#21c3e8",
  },
});
