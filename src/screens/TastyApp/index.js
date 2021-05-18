//@react
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
//@redux
import { useSelector } from "react-redux";
//@components
import Header from "../../components/Header";
//@screens
import Home from "../Home";
import RecipiesList from "../RecipiesList";
import EditRecipe from "../EditRecipe";
import AddRecipe from "../AddRecipe";
import Login from "../Login";
import Signup from "../Signup";
import Profile from "../Profile";
import RecipeDetails from "../RecipeDetails";
//@react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//@selectors
import { selectUser } from "../../redux/selectors";

function LogoTitle() {
  return <Header />;
}
const Stack = createStackNavigator();

export default function TastyApp() {
  const user = useSelector(selectUser);
  const isLogged = true;
  return (
    <NavigationContainer>
      {!Object.keys(user).length /* !isLogged ?*/ ? (
        <Stack.Navigator>
          <Stack.Screen
            initialRouteName="Login"
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            cardStyle: {
              backgroundColor: "#FFF",
            },
            headerStyle: {
              backgroundColor: "#79dcf1",
              height: 120,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            },
            headerTintColor: "black",
            //headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
