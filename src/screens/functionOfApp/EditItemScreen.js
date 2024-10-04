import React,{useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native"
import CustomButton from "../../components/CustomButton";


export default function EditItemScreen({route, navigation}){
    const {item, setItem, items} = route.params;

    const [name,setName] =useState(item? item.name: '');
    const [quantity, setQuantity] = useState(item? item.quantity: '');
    const[expiration, setExpiration] = useState(item ? item.expiration : '');



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
        <CustomButton title="Save"/>
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