import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
export default function Like({ size }) {
  const [liked, setLiked] = useState(true);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={handleLike}>
      {liked ? (
        <AntDesign name="heart" size={size} color="#B70000" />
      ) : (
        <AntDesign name="hearto" size={size} color="#000" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
