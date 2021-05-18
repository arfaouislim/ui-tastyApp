//@react
import React, { useEffect, useState } from "react";
//@react-native
import { StyleSheet, View } from "react-native";
//@components
import NavigatorButton from "./NavigatorButton";
//@icons
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const iconsSize = 30;

export default function BottomTabNavigator({ navigation, screenIndex }) {
  const [active, setActive] = useState(
    [...Array(4)]
      .map((index) => !!index)
      .map((currentVal, index) => (index === screenIndex ? true : false))
  );
  const home = (
    <AntDesign
      name="home"
      size={iconsSize}
      color={active[0] ? "#21c3e8" : "#000"}
    />
  );

  const myRecipes = (
    <Entypo
      name="list"
      size={iconsSize}
      color={active[1] ? "#21c3e8" : "#000"}
    />
  );
  const favorites = (
    <AntDesign
      name="hearto"
      size={iconsSize}
      color={active[2] ? "#21c3e8" : "#000"}
    />
  );
  const settings = (
    <MaterialCommunityIcons
      name="face-profile"
      size={iconsSize}
      color={active[3] ? "#21c3e8" : "#000"}
    />
  );
  const menu = [
    { index: 0, title: "Home", icon: home, active: active[0] },
    { index: 1, title: "Recipes", icon: myRecipes, active: active[1] },
    { index: 2, title: "Favorites", icon: favorites, active: active[2] },
    { index: 3, title: "Profile", icon: settings, active: active[3] },
  ];

  useEffect(() => {
    setActive(
      [...Array(4)]
        .map((index) => !!index)
        .map((currentVal, index) => (index === screenIndex ? true : false))
    );
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.bottomTabNavigator}>
        {menu.map((btn) => (
          <NavigatorButton
            key={btn.index}
            title={btn.title}
            icon={btn.icon}
            active={btn.active}
            handlePress={() => {
              switch (btn.index) {
                case 0:
                  setActive([true, false, false, false]);
                  navigation.navigate("Home");

                  console.log("Active >>>>", btn.index, active);

                  break;
                case 1:
                  setActive([false, true, false, false]);
                  console.log("Active >>>>", btn.index, active);

                  break;
                case 2:
                  setActive([false, false, true, false]);
                  console.log("Active >>>>", btn.index, active);

                  break;
                case 3:
                  setActive([false, false, false, true]);
                  navigation.navigate("Profile", { navigation: navigation });

                  console.log("Active >>>>", btn.index, active);

                  break;
              }
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  bottomTabNavigator: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    paddingRight: 20,
    paddingLeft: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderColor: "#ccc",
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,

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
});
