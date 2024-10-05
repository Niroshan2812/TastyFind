import React,{useState} from "react";
import {View, Text, StyleSheet, TextInput, Button, Alert} from "react-native"
import CustomButton from "../../components/CustomButton";
import {doc, updateDoc} from 'firebase/firestore';
import {db} from "../../config/firebaceConfig";



export default function EditItemScreen({route, navigation}){
  // to get items from rote parms
    const {item} = route.params;

    const [name,setName] =useState(item? item.name: '');
    const [quantity, setQuantity] = useState(item? item.quantity: '');
    const[expiration, setExpiration] = useState(item ? item.expiration : '');


    const handleSave = async ()=>{
      try{
        const itemDocRef = doc(db,"items", item.id );

        await updateDoc(itemDocRef, {
          name: name,
          quantity: quantity,
          expiration: expiration
        })
        Alert.alert("Sucess", "Item is saved succefylly");
    }
    catch(error){
      console.error("Error updating item: ", error);
      Alert.alert("Error", "Failed to update item.");
    }
  }

    return (
    <View style={styles.container}>
      <Text style={styles.title}>{item ? 'Edit Item' : 'Add Item'}</Text>
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
        <CustomButton title="Save" onPress={handleSave}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
  },
});