import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import CustomButton from "../../components/CustomButton";
import { db } from "../../config/firebaceConfig";
import { collection, addDoc } from "firebase/firestore";

import {addItem} from '../../components/FirebaceSearvice';

export default function AddItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiration, setExpiration] = useState("");

  const handleSave = async () => {
    try {
      if (!name || !quantity || !expiration) {
        Alert.alert("All field need to be field");
        return;
      }
    await addItem({name, quantity, expiration});
    Alert.alert("Success", "Item Savied Succefully ")

      /* 
      const docRef = await addDoc(collection(db, "items"), {
        name: name,
        quantity: quantity,
        expiration: expiration,
      });
      */
      Alert.alert("Sucess", "Item Saved")
    } catch (error) {
      console.log("Error saving item: ", error.message);
      Alert.alert("Error", "There was an issue saving the item.");


    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>'Add Item'</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiration Date (YYYY-MM-DD)"
        value={expiration}
        onChangeText={setExpiration}
      />
      <View style={styles.buttonContainer}>
        <CustomButton title="Save" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
