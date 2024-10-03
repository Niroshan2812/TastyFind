import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "../../components/CustomButton";
import { auth } from "../../config/firebaceConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpScreen({navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordshow, setpasswordshow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);


  //Check is empty or not 
  const isEmpty = (email, password) => {
    if(email.trim() ==="" || password.trim()===""){
      Alert.alert("Field can't be empty");
      return false;
    }else{
     return true
    }
  }
  // check Email validation
  const isValidMail = (email) => {
    const trimedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   

    if (emailRegex.test(trimedEmail)) {
     
      return emailRegex.test(trimedEmail);
    }else{
      setEmailError(true);
      return emailRegex.test(trimedEmail);
    }

   
  };

  //Pass auth to firebace to sign up
  const handleSignUp = async () => {
   
    if (isEmpty(email,password) && isValidMail(email) ) {
    
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created");
        //After user creation process this will be rederected to Login Page 
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      } catch (error) {
       // console.error(error);
        setSignUpError(true);
        setErrorMessage(error.message);
      }
    } else {
      
     setErrorMessage("Invalid Email");
    }
  };

  return (
    <View style={styles.contaiiner}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      {/* Conditionally render login password text */}
      {emailError && (
        <Text style={styles.textStyle}>Invalid Email Address</Text>
      )}

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry={!passwordshow}
          />
        </View>
        <TouchableOpacity
          onPress={() => setpasswordshow(!passwordshow)}
          style={styles.iconopacity}
        >
          <Ionicons
            name={passwordshow ? "eye-off" : "eye"}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <CustomButton title={"SignUP"} onPress={handleSignUp} />

       {/* Sign Up Error Occured  */}
       {signUpError && (
        <Text style={styles.textStyle}>Can't sign Up! Retry within few minits  </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contaiiner: {
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
  iconopacity: {
    marginLeft: 10,
  },
  icon: {
    fontSize: 15,
    color: "gray",
  },
});
