import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//@Components

//@icons
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Header({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#0FC0F0" barStyle="dark-content" />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/tasty.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
    shadowColor: "#000",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "#0FC0F0",
    //height: 80,
  },
  btnContainer: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 20,
  },
  logo: {
    height: 50,
    width: 100,
  },
});
