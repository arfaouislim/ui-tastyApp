//@react
import React, { useState } from "react";
//@react-native
import {
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
//@constants
import { URL } from "../../constants";
//@components
import Rating from "../Rating";
import Like from "../Like";
import UsersViews from "../UsersViews";
//@icons
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function RecipeCard({ recipe, isVisible, onExit }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.exitContainer}>
          <TouchableOpacity style={styles.closeBtn} onPress={onExit}>
            <FontAwesome name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <Image
          style={styles.recipeImage}
          size={70}
          source={
            !!recipe.image
              ? { uri: URL.STRAPI_LOCALHOST + recipe.image.url }
              : require("../../../assets/defaultRecipe.png")
          }
        />

        <View style={styles.infosContainer}>
          <Rating stars={3} reviews={20} size={35} />

          <Text numberOfLines={2} style={styles.recipeName}>
            {recipe.name}
          </Text>
          <Text style={styles.category}>Category here</Text>

          {/* <UsersViews views={254} />*/}
        </View>
        <View style={styles.likeContainer}>
          <Like size={30} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFF",
    flexDirection: "column",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  closeBtn: {
    alignSelf: "flex-end",
  },
  exitContainer: {
    zIndex: 1,
    position: "absolute",
    top: 15,
    right: 15,
  },
  recipeImage: {
    width: "100%",
    height: 350,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    backgroundColor: "#FFF",
  },
  infosContainer: {
    marginTop: 10,
    borderColor: "#000",
    padding: 10,
  },
  recipeName: {
    fontSize: 30,
    width: "90%",
    fontWeight: "bold",
    color: "#000",
    textAlignVertical: "center",
  },
  category: {
    textAlignVertical: "center",
    fontSize: 12,
    color: "#A3A3A3",
  },
  likeContainer: {
    position: "absolute",
    backgroundColor: "#FFF",
    borderRadius: 100,
    padding: 15,
    bottom: 20,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
