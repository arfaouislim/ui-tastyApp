import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import throttle from "lodash/throttle";
//@react-redux
import { combineReducers } from "redux";
import { useSelector, Provider } from "react-redux";
import reducers from "./src/redux/reducers";

import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
//@Selectors
import { selectUser } from "./src/redux/selectors";
//@Components
///////
//@Screens
import TastyApp from "./src/screens/TastyApp";

//@react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//@localStorage
import { saveState, loadState } from "./src/localStorage";

const Stack = createStackNavigator();

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 2000)
);

export default function App() {
  return (
    <Provider store={store}>
      <TastyApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  logo: {
    height: 60,
    width: 120,
  },
});
