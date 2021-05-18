//@React
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
//@Components
import Header from "../../components/Header";
import BottomTabNavigator from "../../components/BottomTabNavigator";
//@Services
//@LocalStorage

const screenIndex = 0;

export default function Home({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <BottomTabNavigator navigation={navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    height: "100%",
  },
});
