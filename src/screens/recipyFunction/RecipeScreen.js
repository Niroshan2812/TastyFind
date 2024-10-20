import React, {useEffect, useState} from "react";
import { FlatList, Text, View, FlatList } from "react-native";
import {FetchRecipe} from '../../components/RecipeSearvice';
import RecipeItem from '../../components/RecipeItem';


export default function RecipiesScreen (){
    const [recipes, setRecepies] = useState([]);

    useEffect(()=>{
        const getRecipe = async () =>{
            const fetchRecepies = await FetchRecipe();
            setRecepies(fetchRecepies);

        };
        getRecipe();
    }, []);

    return(
    <View >
        <FlatList
         data ={recipes}
         keyExtractor = {(item) => item.name}
         renderItem ={({item}) => <RecipeItem recipe ={item}/>}/>
    </View>   
    )

}