import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { useSelector } from "react-redux";

import { AntDesign } from "@expo/vector-icons";
import { selectUser } from "../../redux/selectors";

export default function UserCard({}) {
  const user = useSelector(selectUser);

  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <View>
          <Image
            style={styles.Avatar}
            source={require("../../../assets/me.jpg")}
          />
        </View>
        <Text
          style={styles.userName}
        >{` ${user.Firstname} ${user.Lastname}`}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
        <Text style={styles.userEmail}>{user.username}</Text>
        <Text style={styles.userEmail}>
          Created at: {new Date(user.created_at).toDateString()}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },

  userCard: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",

    backgroundColor: "#FFF",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },

  Avatar: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 150,
    backgroundColor: "#FFF",
    borderColor: "#79dcf1",
    borderWidth: 5,
    borderRadius: 100,
  },
  userName: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },

  userEmail: {
    fontSize: 15,
  },
});
