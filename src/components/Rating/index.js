import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";
export default function Rating({ stars, reviews, size }) {
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        {[...Array(stars).keys()].map((star) => (
          <AntDesign
            name="star"
            key={`star${star}`}
            size={size}
            color="#FFAE00"
          />
        ))}
        {[...Array(5 - stars).keys()].map((star) => (
          <AntDesign
            name="staro"
            key={`staro${star}`}
            size={size}
            color="black"
          />
        ))}
      </View>

      <Text
        style={[styles.nbReviews, { fontSize: (size * 70) / 100 }]}
      >{`(${reviews})`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
  nbReviews: {
    textAlignVertical: "center",
    fontSize: 15,
    color: "#A3A3A3",
  },
});
