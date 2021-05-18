import React, { useEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import useTasty from "../../hooks/useTasty";
import { URL } from "../../constants";

export default function Popup({
  isVisible,
  onCancel,
  onConfirm,
  selectedRecipe,
}) {
  const { isLoading, errors, handler } = useTasty();

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Are you sure you want to delete this Recipe ?{" "}
          </Text>
          <View style={styles.btns_Container}>
            <TouchableOpacity style={styles.cancel_Btn} onPress={onCancel}>
              <Text style={styles.modal_Txt}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirm_Btn} onPress={onConfirm}>
              <Text style={styles.modal_Txt}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(121, 220, 241, 0.7)",
  },

  modalView: {
    width: "80%",
    flexDirection: "column",
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 25,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  modal_Txt: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },

  btns_Container: {
    flexDirection: "row",
  },

  confirm_Btn: {
    backgroundColor: "#47c1dc",
    width: "50%",
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  cancel_Btn: {
    backgroundColor: "#ccc",
    width: "30%",
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});
