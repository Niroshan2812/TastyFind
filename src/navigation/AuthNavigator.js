import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/authentication/LoginScreen";
import SignUpScreen from "../screens/authentication/SignupScreen";
import ForgotPasswordScreen from "../screens/authentication/FogotPasswordSc";
import HomeScreen from "../screens/functionOfApp/FridgeScreen";
import AddEditItemScreen from "../screens/functionOfApp/EditItemScreen";
import AddItem from "../screens/functionOfApp/AddItem";
const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
     <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true, title: "Fridge" }}
      />
        <Stack.Screen
        name="AddEditItem"
        component={AddEditItemScreen}
        options={({ route }) => ({
          title: route.params?.item ? 'Edit Item' : 'Add Item',
        })}
      />
      <Stack.Screen
      name = "AddItem"
      component={AddItem}
      option={{headerShown:true, title:"AddItem"}}
      />

    </Stack.Navigator>
  );
}
