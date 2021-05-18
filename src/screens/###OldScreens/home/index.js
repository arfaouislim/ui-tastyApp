import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logoutService } from "../../services/users";
import { deleteState } from "../../localStorage";
import Header from "../../components/Header";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.btnsContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={() => navigation.navigate("Recipies List")}
        >
          <Entypo name="list" size={50} color="black" />
          <Text style={styles.btnTitle}>RECIPES LIST</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={() => navigation.navigate("Add Recipe")}
        >
          <Entypo name="add-to-list" size={50} color="black" />
          <Text style={styles.btnTitle}>ADD RECIPE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnsContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={() => navigation.navigate("Recipies List")}
        >
          <Feather name="search" size={50} color="black" />
          <Text style={styles.btnTitle}>FIND A RECIPE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={() => navigation.navigate("Profile")}
        >
          <MaterialCommunityIcons name="face-profile" size={50} color="black" />
          <Text style={styles.btnTitle}>MY PROFILE</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          right: 0,
          left: 0,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.Logout_Btn}
          onPress={async () => {
            try {
              dispatch(logoutService());
              deleteState();
            } catch (err) {
              alert("Something Wrong !");
              console.log("logout Error", err);
            }
          }}
        >
          <Text style={styles.LogoutBtn_Txt}>Log Out</Text>

          <MaterialIcons
            name="logout"
            size={30}
            color="#000"
            style={{ textAlignVertical: "center", marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    height: "100%",
    marginTop: 10,
    padding: 10,
  },

  btnsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 160,
    backgroundColor: "#FFF",
    borderColor: "#79dcf1",
    borderWidth: 2,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderRadius: 20,
    margin: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  btnTitle: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },

  Logout_Btn: {
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 20,
    paddingLeft: 20,
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  LogoutBtn_Txt: {
    color: "#5EC8DF",
    fontWeight: "bold",
    fontSize: 18,
    textAlignVertical: "center",
  },
});
