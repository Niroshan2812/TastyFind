import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { searchRecipies } from "../../components/RecipeSearvice";
import RecipyItem from "../../components/RecipeItem";
import CustomButton from "../../components/CustomButton"

export default function RecepySearch() {
  const [searchTerm, setsearchTerm] = useState("");
  const [result,setResult] = useState([]);

  const handleSearch = async () => {
    if (searchTerm.trim() === "") return;
    const searchResult = await searchRecipies(searchTerm);
    setResult(searchResult);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by name or ingredient"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={{ padding: 10, borderWidth: 1, borderColor: "gray" }}
      />
      <CustomButton title={"Search"} onPress={handleSearch}/>
      <FlatList 
      data ={result}
      keyExtractor=  {({item})=> <RecipyItem recipe = {item}/>}
      />
    </View>
  );
}

const style = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:"center",
    },
    
})