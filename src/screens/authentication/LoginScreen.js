import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import CustomButton from "../../components/CustomButton";
import { auth } from "../../config/firebaceConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

// Define wrong password added if then show that 


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const navigation =useNavigation();
  const[loginFaild, setLoginFailed] = useState(false);

  const handleLogin = async () =>{
    try{
      const isLoginSuccefull = false;
      if(isLoginSuccefull){
        setLoginFailed(true);
        throw new Error('Invalid email or password');
      }
        await signInWithEmailAndPassword(auth,email,password);
        navigation.navigate('Home');

    }catch (error){
        alert(error,'Invalid email or password');
    }
  };
  const handleForgotPassword = () => {
    alert("Redirecting to password reset...");
    // Here you can implement the actual navigation to the Forgot Password screen
    // navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!ShowPassword}
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          onPress={() => setShowPassword(!ShowPassword)}
          style={styles.iconOpacity}
        >
          <Ionicons
            name={ShowPassword ? "eye-off" : "eye"}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>

         {/* Change Logic for bypass the validation process while developing
        
          <CustomButton title="Login" onPress={handleLogin} />
        */}
        <CustomButton title="Login" onPress={()=>navigation.navigate("Home")} />

        {/* Conditionally render login password text */}
        {
          loginFaild &&(
            <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.textStyle}>Forgot your password? Reset it</Text>
          </TouchableOpacity>
          )
        }

    
        <CustomButton title="Sign Up" onPress={() => navigation.navigate("Signup")} />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderBlockColor: "#dcdcdc",
    borderBottomWidth: 0.5,
    marginBottom: 12,
    padding: 10,
  },
  eyeContaiiner: {
    position: "absolute",
  },
  iconOpacity: {
    marginLeft: 10,
  },
  icon: {
    fontSize: 15,
    color: "gray",
  },
  buttonContainer:{
    marginTop:20
  }, 
  textStyle: {
    color: "blue",
    textDecorationLine: "underline",
   marginTop:2,
   marginBottom:3,
   marginEnd:40,
   alignSelf:"flex-end"
  },
  
});



