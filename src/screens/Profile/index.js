//@react
import React from "react";
//@react-native
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";

//@components
import UserCard from "../../components/UserCard";

export default function Profile({ user }) {
  return (
    <View style={styles.container}>
      <UserCard user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    //height: "100%",
  },
});
