import React , {useState}from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from "react-native"
import CustomButton from "../../components/CustomButton"


export default function FridgeScreen({navigation}){
    const [items, setItems] = useState([
        { id: '1', name: 'Milk', quantity: '1 litre', expiration: '2024-10-01' },
        { id: '2', name: 'Eggs', quantity: '12 pcs', expiration: '2024-09-30' }
      ]);

      const navigateToAddEditItem = (item) =>{
        navigation.navigate("AddEditItem", {item,setItems,items})
      }
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Fridge Inventory</Text>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemContainer} onPress={() => navigateToAddEditItem(item)}>
                <Text style={styles.itemText}>{item.name} - {item.quantity}</Text>
                <Text style={styles.expirationText}>Exp: {item.expiration}</Text>
              </TouchableOpacity>
            )}
          />
          <View style={styles.buttonContainer}>
            <Button title="Add Item" onPress={() => navigation.navigate("AddItem")} />
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
      itemContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        elevation: 2,
      },
      itemText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#555',
      },
      expirationText: {
        fontSize: 14,
        color: '#888',
      },
      buttonContainer: {
        marginTop: 20,
      },
    });