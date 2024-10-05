import {db} from "../config/firebaceConfig";
import { collection,addDoc, updateDoc,getDoc,doc , getDocs} from "firebase/firestore";

//Add a new item to firestore
export const addItem = async(item)=>{
    try{
        const docRef = await addDoc(collection(db, "items"), {
            name: item.name,
            quantity: item.quantity,
      expiration: item.expiration,
        });
        return docRef.id;
    }
    catch(error){
        console.error("Error Adding Item",error);
        throw error;
    }
};

// Update an existing item in firestore 

export const updateItem = async (item) =>{
    try {
        const itemDocRef = doc(db, "items", item.id);
        await updateDoc(itemDocRef, {
            name: item.name,
            quantity: item.quantity,
            expiration: item.expiration,
        });
        return true; 
    } catch (error) {
        console.error("Error when Updating item", error);
        throw error;
    }
};

// fetch item from firebace Store 
export const getItems =async () =>{
    try {
        const querySnapshop = await getDocs(collection(db, "items"));
        const items = querySnapshop.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        return items;


    } catch (error) {
        console.error("Error Fetching Data ", error );
        throw error; 
        
    }
}; 


