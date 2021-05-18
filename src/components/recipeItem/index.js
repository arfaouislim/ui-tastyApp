import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { URL } from "../../constants";
import Rating from "../Rating";
import Like from "../Like";
import UsersViews from "../UsersViews";

//@icons
import { Ionicons } from "@expo/vector-icons";

export default function recipeItem({ style, recipe, onView }) {
  switch (style) {
    case "H-Box":
      return (
        <TouchableOpacity
          style={searchPageStyles.itemContainer}
          onPress={() => onView()}
        >
          <View style={searchPageStyles.avatarContainer}>
            <Image
              style={searchPageStyles.recipeImage}
              size={15}
              source={
                !!recipe.image
                  ? { uri: URL.STRAPI_LOCALHOST + recipe.image.url }
                  : require("../../../assets/defaultRecipe.png")
              }
            />
          </View>
          <Text numberOfLines={1} style={searchPageStyles.recipeName}>
            {recipe.name}
          </Text>
          <Ionicons name="chevron-forward-sharp" size={25} color="black" />
        </TouchableOpacity>
      );
    //break;
    case "V-Box":
      return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onView()}>
          <View style={styles.likeContainer}>
            <Like size={20} />
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
            <Rating stars={3} reviews={20} size={15} />
            <Text numberOfLines={1} style={styles.recipeName}>
              {recipe.name}
            </Text>
            <Text style={styles.category}>Category here</Text>
            <UsersViews views={254} />
          </View>
        </TouchableOpacity>
      );
    // break;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  //RecipeItem Style1 : Home Page
  itemContainer: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    height: 290,
    width: 160,
    borderRadius: 20,
    borderColor: "rgba(185, 185, 185,0.9)",
    borderWidth: 1,
    borderStyle: "dotted",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  recipeImage: {
    width: "100%",
    height: 180,
    borderRadius: 18,
  },

  infosContainer: {
    padding: 10,
    height: 110,
    borderRadius: 20,
  },

  category: {
    textAlignVertical: "center",
    fontSize: 12,
    color: "#A3A3A3",
  },
  recipeName: {
    fontSize: 18,
    width: "90%",
    fontWeight: "bold",
    color: "#000",
  },
  likeContainer: {
    position: "absolute",
    padding: 5,
    bottom: 5,
    right: 5,
  },
});

const searchPageStyles = StyleSheet.create({
  //RecipeItem Style1 : Home Page
  itemContainer: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    //width: "100%",
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 30,
    },
    shadowOpacity: 0.9,
    shadowRadius: 30,

    elevation: 1,
  },

  avatarContainer: {
    borderRadius: 100,
  },
  recipeImage: {
    width: 48,
    height: 48,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  recipeName: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#000",
  },
});
