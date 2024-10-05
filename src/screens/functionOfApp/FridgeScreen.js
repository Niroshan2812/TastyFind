import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import { db } from "../../config/firebaceConfig";
import { collection, getDocs } from "firebase/firestore";
import {getItems} from "../../components/FirebaceSearvice"

export default function FridgeScreen({ navigation }) {
  const [fridgeItems, setFridgeItems] = useState([]);
  const [loading, setLoading] = useState(true); // For showing loading state if necessary+

  useEffect(() => {
    const getFridgeItems = async () => {
      try {

        const items = await getItems();
        setFridgeItems(items);
       /*
         const querySnapshot = await getDocs(collection(db, "items"));
        setFridgeItems(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
       */
      } catch (error) {
        console.log("Error fetching items: ", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    getFridgeItems();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Name: {item.name}</Text>
      <Text style={styles.itemText}>Expiration: {item.expiration}</Text>
      <Text style={styles.itemText}>Quantity: {item.quantity}</Text>
      <CustomButton
        title="Edit"
        onPress={() => navigation.navigate("AddEditItem", { item })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text> // Display loading state
      ) : (
        <>
          {fridgeItems.length === 0 ? (
            <Text style={styles.emptyMessage}>No items in your fridge.</Text> // Handle empty list case
          ) : (
            <FlatList
              data={fridgeItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContent}
            />
          )}
        </>
      )}
      <View style={styles.addButtonContainer}>
        <CustomButton
          title="Add New Item"
          onPress={() => navigation.navigate("AddItem")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  listContent: {
    paddingBottom: 30,
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 18,
    color: "#666",
  },
  addButtonContainer: {
    marginTop: 20,
    alignItems: 'center', // Center the button horizontally
  },
});
