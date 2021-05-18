import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";

export default function Footer() {
  const [active, setActive] = React.useState("home");
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const actions = [
    {
      icon: "plus",
      label: "New Recipe",
      onPress: () => setActive("plus"),
      small: true,
    },

    {
      icon: "pencil",
      label: "Update Recipe",
      onPress: () => setActive("pencil"),
      small: true,
    },
    {
      icon: "delete",
      label: "Delete Recipe",
      onPress: () => setActive("delete"),
      small: true,
    },
  ];

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? "home" : active}
          actions={actions}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({});
