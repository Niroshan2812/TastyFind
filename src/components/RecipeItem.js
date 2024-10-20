import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipeItem = ({ recipe }) => {
  return (
    <View>
      <Text>{recipe.name}</Text>
      <Text>Ingredeance: {recipe.ingredients.join(", ")}</Text>
      <Text> Steps: {recipe.steps.join(". ")}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  name:{
    fontSize:10,
    fontWeight:'bold'
  }
});
