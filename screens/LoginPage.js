import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePress = () => {
    setIsClicked(true);
    navigation.navigate("SignUpPage");
  };
  const handlePress1 = () => {
    setIsClicked(true);
    navigation.navigate("ResetPasswordPage");
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
    return emailPattern.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email.trim())) {
      Alert.alert("Error", "Invalid Email format");
      return;
    }

    if (password.trim().length < 5) {
      Alert.alert("Error", "Password must be at least 5 characters long");
      return;
    }

    try {
      const response = await fetch(
        "http://192.168.58.91:80/lcu-connect-2/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password.trim(),
          }),
        }
      );

      const responseText = await response.text();
      console.log(responseText);

      const data = JSON.parse(responseText);
      console.log(data);

      if (data.success) {
        Alert.alert("Success", "Logged in successfully");
        if (data.token && data.user) {
          await AsyncStorage.setItem("authToken", data.token);
          await AsyncStorage.setItem("userData", JSON.stringify(data.user));
          navigation.navigate("HomePage");
        } else {
          console.error("No token or user data in response:", data);
          Alert.alert(
            "Error",
            "No token or user data in response. Please try again later."
          );
        }
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to log in");
    }
  };

  return (
    <View style={styles.loginPage}>
      <Text style={styles.logIn}>Log In</Text>
      <Text style={styles.addYourDetails}>Add your details to Login</Text>

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
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.showPasswordButton}
        >
          <Icon
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color={Color.colorDarkslateblue_200}
          />
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.loginButton,
          { opacity: pressed ? 0.5 : 1.0 },
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>Log In</Text>
      </Pressable>

      <Pressable style={styles.registerContainer} onPress={handlePress}>
        <Text style={styles.registerText}>
          <Text style={styles.dontHaveAccount}>
            {`Don't have an account? `}
          </Text>
          <Text style={[styles.register, isClicked && styles.underlineText]}>
            Register
          </Text>
        </Text>
      </Pressable>
      <Pressable style={styles.registerContainer} onPress={handlePress1}>
        <Text style={styles.registerText}>
          <Text style={styles.dontHaveAccount}>
            {`Forgot Password? `}
          </Text>
          <Text style={[styles.register, isClicked && styles.underlineText]}>
            Reset
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logIn: {
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
    width: "100%",
    marginBottom: 15,
    position: "relative",
  },
  textInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    fontFamily: FontFamily.sansationLight,
  },
  showPasswordButton: {
    position: "absolute",
    right: 10,
    top: 13,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: Color.colorDarkslateblue_200,
    borderRadius: Border.br_31xl,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.sansationBold,
    fontSize: FontSize.size_base,
  },
  registerContainer: {
    marginTop: 20,
  },
  registerText: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.sansationLight,
  },
  dontHaveAccount: {
    color: Color.colorBlack,
  },
  register: {
    color: Color.colorDarkslateblue_200,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
});

export default LoginPage;
