import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { URL } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";

export default function recipeItem({ recipe, onEdit, onDelete, onView }) {
  return (
    <View style={styles.itemContainer} key={recipe.id}>
      <TouchableOpacity
        style={styles.item}
        key={recipe.id}
        onPress={() => onView(recipe)}
      >
        {
          <View
            style={{
              backgroundColor: "#FFF",
              borderWidth: 3,
              borderColor: "#000",
              borderRadius: 100,
            }}
          >
            <Image
              style={styles.Avatar}
              size={70}
              source={
                !!recipe.image
                  ? { uri: URL.STRAPI_LOCALHOST + recipe.image.url }
                  : require("../../../assets/defaultRecipe.png")
              }
            />
          </View>
        }

        <View style={styles.recipeInfo}>
          <Text style={styles.recipeTitle} key={recipe.id}>
            {recipe.name}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.OperationsBox}>
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => onEdit(recipe)}
        >
          <MaterialIcons name="edit" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <MaterialIcons name="delete" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { height: 90, backgroundColor: "gray" },

  container: {
    //marginBottom: 150,
    marginTop: 5,
    paddingLeft: 5,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E9FFFC",
    marginBottom: 5,
    borderLeftWidth: 10,
    borderRightWidth: 0,
    borderColor: "#79dcf1",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  item: {
    flexDirection: "row",
    backgroundColor: "#E9FFFC",
    padding: 10,
  },
  Avatar: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: "#FFF",
  },

  recipeInfo: {
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
    height: 70,
    padding: 10,
    marginLeft: 10,
    borderColor: "#FFF",
    borderRadius: 10,
  },
  recipeTitle: {
    fontSize: 13,
    fontWeight: "bold",
  },

  OperationsBox: {
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    padding: 10,
  },
});
