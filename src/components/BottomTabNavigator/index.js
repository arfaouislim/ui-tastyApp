//@react
import React, { useEffect, useState } from "react";
//@react-native
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
//@react-navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//@screens
import StartSection from "../StartSection";
import AddRecipe from "../../screens/AddRecipe";
import Profile from "../../screens/Profile";
import FindRecipe from "../../screens/FindRecipe";

//@icons
import { AntDesign, Entypo } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const iconsSize = 25;

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        //showLabel: false,
        labelStyle: {
          textAlignVertical: "center",
          height: "100%",
        },
        style: styles.BottomTabsContainer,
      }}
    >
      <Tab.Screen
        name="Home"
        component={StartSection}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <AntDesign
                name="home"
                size={iconsSize}
                color={focused ? "#0FC0F0" : "#2C2C2C"}
              />
              <Text
                style={[
                  styles.tabText,
                  { color: focused ? "#0FC0F0" : "#2C2C2C" },
                ]}
              >
                Home
              </Text>
              <View
                style={focused ? styles.activeTab : { display: "none" }}
              ></View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={FindRecipe}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <AntDesign
                name="search1"
                size={iconsSize}
                color={focused ? "#0FC0F0" : "#2C2C2C"}
              />
              <Text
                style={[
                  styles.tabText,
                  { color: focused ? "#0FC0F0" : "#2C2C2C" },
                ]}
              >
                Search
              </Text>
              <View
                style={focused ? styles.activeTab : { display: "none" }}
              ></View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="add Recipe"
        component={AddRecipe}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.CustomTabContainer,
                { borderColor: focused ? "#0FC0F0" : "#ccc" },
              ]}
            >
              <Entypo
                name="plus"
                size={35}
                color={focused ? "#0FC0F0" : "#000"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={StartSection}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <AntDesign
                name="hearto"
                size={iconsSize}
                color={focused ? "#0FC0F0" : "#2C2C2C"}
              />
              <Text
                style={[
                  styles.tabText,
                  { color: focused ? "#0FC0F0" : "#2C2C2C" },
                ]}
              >
                Favorites
              </Text>
              <View
                style={focused ? styles.activeTab : { display: "none" }}
              ></View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Profile}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <MaterialCommunityIcons
                name="face-profile"
                size={iconsSize}
                color={focused ? "#0FC0F0" : "#2C2C2C"}
              />
              <Text
                style={[
                  styles.tabText,
                  { color: focused ? "#0FC0F0" : "#2C2C2C" },
                ]}
              >
                Profile
              </Text>
              <View
                style={focused ? styles.activeTab : { display: "none" }}
              ></View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  BottomTabsContainer: {
    // position: "absolute",
    //right: 30,
    //left: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingRight: "12%",
    paddingLeft: "12%",
    //borderTopRightRadius: 40,
    //borderTopLeftRadius: 40,
    borderColor: "#ccc",
    borderTopWidth: 3,
    //borderRightWidth: 3,
    //borderLeftWidth: 3,
    borderStyle: "dotted",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  tabContainer: {
    position: "absolute",
    top: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "pink",
    height: 57,
    width: 50,
  },

  CustomTabContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    top: 15,
    height: 60,
    width: 60,
    borderRadius: 100,
    borderWidth: 3,
  },

  tabText: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 5,
  },
  activeTab: {
    position: "absolute",
    bottom: 0,
    height: 4,
    width: "100%",
    backgroundColor: "#0FC0F0",
    borderRadius: 100,
  },
});
