import React, { useEffect, useState } from "react";

import {
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";

export default function ConfirmModal({ isVisible, msg, onConfirm, onCancel }) {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{msg}</Text>
            <View style={styles.btnsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={onCancel}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonConfirm]}
                onPress={onConfirm}
              >
                <Text style={styles.textStyle}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
    //borderColor: "#47c1dc",
    width: 300,
    height: 200,
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
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

  btnsContainer: {
    flexDirection: "row",
  },

  button: {
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonCancel: {
    backgroundColor: "#ccc",
    width: 90,
  },
  buttonConfirm: {
    backgroundColor: "#47c1dc",
    width: 120,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
  },
});
