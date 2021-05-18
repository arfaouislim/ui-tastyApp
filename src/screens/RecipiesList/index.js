import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RecipesList from "../../components/RecipesList";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function RecipiesList({ navigation }) {
  return (
    <>
      <View style={styles.container}></View>
      <RecipesList navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
});
