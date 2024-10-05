import { collection, addDoc, getDoc, doc, updateDoc,deleteDoc,query,where, Query , getDocs} from "firebase/firestore";
import { db } from "../config/firebaceConfig";

const recipeCollection = collection(db, 'recipes');

//Function to add recipe 
export const addRecipe = async(recipeData) =>{
    try {
        const docRef =await addDoc(recipeCollection, recipeData);
        return{success: true, id: docRef.id};
        
    }catch(error){
        console.error("Error adding recipes", error)
        return {success: false, message: "Error adding recipes"};
    }
};

// function gt all recipes 
export const getAllRecipes = async() => {
    try {
        const snapshot = await  getDocs(recipeCollection);
        const recipes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
        return recipes;
    } catch (error) {
        console.error("Error fetching recipies " , error);
        return[];
    }
};

// Function update recipies 

export const updateRecipies = async (recipeID, updatedDate) =>{
    try {
        const recipeDoc = doc(db, 'recipes', recipeID);
        await updateDoc(recipeDoc, updatedDate);
        return {success:true};

    } catch (error) {
        console.error("Error updaing Recipe", error);
        return{success:false, error};
    }
};

//functionn to delete recipies 
export const deleteRecipe = async (recipeID) => {
    try {
        const recipeDoc = doc(db, 'recipes', recipeID);
        await deleteDoc(recipeDoc);
        return{success:true};

        
    } catch (error) {
        console.error("Error when deleting Reipy", error);
        return{success:false, error};
        
    }
};

//function for search recipies 
export const searchRecipies = async (searchTerm) =>{
    try {
        const recipieQuery = Query(
             recipeCollection, 
            where ('name', '>=', searchTerm),
            where('name', '<=', searchTerm+ '\uf8ff')
        );

        const snapshpt = await getDocs(recipieQuery);
        const recipes = snapshpt.docs.map((doc) => ({ id: doc.id, ...doc.data()}));

        if (recipes.length ===0){
            // search by ingredeance if no names are match found 
            const ingredeanceQuery = query(
                recipeCollection, 
                where('ingredeance', 'array-contains', searchTerm)
            );

            const ingredeanceSnapshot = await getDocs (ingredeanceQuery)
            const ingredeanceMatches = ingredeanceSnapshot.docs.map((doc)=> ({id:doc.id, ...id.data()}));

            return ingredeanceMatches.length ? ingredeanceMatches : [];
        }
        return recipes;
    } catch (error) {
        console.error("Error searching Recipies ", error);
        return [];
    }
}