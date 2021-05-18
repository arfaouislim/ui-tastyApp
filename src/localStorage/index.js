import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadState = () => {
  try {
    const serializedState = AsyncStorage.getItem("tasty");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return console.log("err here >>>>>>>", err);
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    return AsyncStorage.setItem("tasty", serializedState);
  } catch (err) {
    return err;
  }
};

export const deleteState = () => {
  try {
    return AsyncStorage.removeItem("tasty");
  } catch (e) {
    return e;
  }
};

/*
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem("tasty");

    return serializedState != null ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    return e;
  }
};

export const saveState = async (state) => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem("tasty", serializedState);
  } catch (e) {
    return e;
  }
};

export const deleteState = async () => {
  try {
    AsyncStorage.removeItem("tasty");
  } catch (e) {
    return e;
  }
};*/
