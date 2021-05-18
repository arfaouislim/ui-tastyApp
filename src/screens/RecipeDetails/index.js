import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Header from "../../components/Header";
import RecipeCard from "../../components/RecipeCard";

export default function RecipeDetails({ navigation, route }) {
  const { recipe } = route.params;

  return (
    <View>
      <Header />
      <RecipeCard recipe={recipe} />
    </View>
  );
}
