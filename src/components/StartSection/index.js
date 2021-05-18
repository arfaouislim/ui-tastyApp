//@react
import React from "react";
//@react-native
import { StyleSheet, Text, View } from "react-native";
//@react-navigation

//@components
import RecipesList from "../RecipesList";
//@icons

export default function StartSection() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Category</Text>
        <RecipesList />
      </View>

      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Recently Added</Text>
        <RecipesList />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  sectionTitle: {
    fontWeight: "bold",
    margin: 10,
    fontSize: 20,
  },
});
