import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Pressable, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const SignUpPage = () => {
  const navigation = useNavigation();

  // State hooks for form fields
  const [matricNo, setMatricNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateMatricNo = (matricNo) => {
    const matricNoPattern = /^LCU\/UG\/\d{2}\/\d{5}$/i;
    return matricNoPattern.test(matricNo);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
    return emailPattern.test(email);
  };

  const handleSignUp = async () => {
    if (!validateMatricNo(matricNo)) {
      Alert.alert('Error', 'Matric No must be in the format LCU/UG/**/***** where * are numbers');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid Email format');
      return;
    }

    if (password.length < 5) {
      Alert.alert('Error', 'Password must be at least 5 characters long');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://192.168.58.91:80/lcu-connect-2/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          matric_no: matricNo,
          email: email,
          password: password,
        }),
      });

      const responseText = await response.text();
      console.log(responseText); // Log the raw response text

      try {
        const data = JSON.parse(responseText);
        console.log(data); // Log the parsed response

        if (data.success) {
          Alert.alert("Success", "Account created successfully");
          navigation.navigate("UserInformation", { matricNo: matricNo });
        } else {
          if (data.message.includes("matric number")) {
            Alert.alert("Error", "Matric number already used");
          } else if (data.message.includes("email")) {
            Alert.alert("Error", "Email already used");
          } else {
            Alert.alert("Error", data.message);
          }
        }
      } catch (error) {
        console.error("Failed to parse JSON:", error);
        Alert.alert("Error", "Unexpected response format");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to sign up");
    }
  };

  return (
    <View style={styles.signUpPage}>
      <Text style={styles.signUp}>Sign Up</Text>
      <Text style={styles.addYourDetails}>Add your details to Register</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="ID/Matric NO"
          value={matricNo}
          onChangeText={setMatricNo}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword} 
          onChangeText={setConfirmPassword}
        />
      </View>
      
      <Pressable
        style={({ pressed }) => [
          styles.createAccountButton,
          { opacity: pressed ? 0.5 : 1.0 },
        ]}
        onPress={handleSignUp}
      >
        <Text style={styles.createAccount}>Create Account</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpPage: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  signUp: {
    fontSize: FontSize.size_21xl,
    color: Color.colorDarkslateblue_200,
    marginBottom: 10,
    fontFamily: FontFamily.sansationLight,
  },
  addYourDetails: {
    fontSize: FontSize.size_2xl,
    color: Color.colorBlack,
    marginBottom: 20,
    fontFamily: FontFamily.sansationLight,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    fontFamily: FontFamily.sansationLight,
  },
  createAccountButton: {
    width: '100%',
    height: 50,
    backgroundColor: Color.colorDarkslateblue_200,
    borderRadius: Border.br_31xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccount: {
    color: Color.colorWhite,
    fontFamily: FontFamily.sansationBold,
    fontSize: FontSize.size_base,
  },
});

export default SignUpPage;
