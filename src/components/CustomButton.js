import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.btnShape, style]} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnShape: {
    backgroundColor: "#4CAF50", // Customize the color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15, // Rounded corners
    marginVertical: 10, // Adds space between buttons
    width: 300,
    alignItems:'center',
   alignSelf:'center'
    
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
