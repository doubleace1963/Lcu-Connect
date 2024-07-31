import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";


const ResetPasswordPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://192.168.58.91:80/lcu-connect-2/ResetPassword.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert(data.message);
        if (data.success) {
          navigation.navigate('HomePage');
        }
      } else {
        Alert.alert(data.message);
      }
    } catch (error) {
      Alert.alert('Error updating password');
    }
  };
  return (
    <View style={styles.resetPasswordPage}>
      <Pressable style={styles.back} onPress={() => navigation.navigate('ProfilePage')}>
        <Text style={styles.back1}>Back</Text>
      </Pressable>
      <Text style={styles.resetPasswordEnterContainer}>
        <Text style={styles.resetPasswordEnterContainer1}>
          <Text style={styles.resetPassword}>
            <Text style={styles.resetPassword1}>{`Reset Password\n`}</Text>
          </Text>
          <Text style={styles.enterYourEmailAndNewPassw}>
            <Text style={styles.resetPassword}> </Text>
            <Text style={styles.enterYourEmail}>
              Enter your email and new password to reset.
            </Text>
          </Text>
        </Text>
      </Text>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <Pressable style={[styles.groupPressable, styles.rectangleViewLayout]} onPress={handleSubmit}>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Text style={styles.submit}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 60,
    width: 329,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorDarkslateblue_200,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  emailTypo: {
    height: 28,
    width: 144,
    textAlign: "left",
    top: 16,
    color: Color.colorDarkslateblue_100,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectanglePosition: {
    left: 20,
    height: 60,
    width: 320,
    position: "absolute",
  },
  rectangleViewLayout: {
    width: 231,
    height: 60,
    position: "absolute",
  },
  back1: {
    color: Color.colorDarkslateblue_200,
    justifyContent: "center",
    width: 60,
    height: 40,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0.2,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
  },
  back: {
    left: 18,
    top: 34,
    position: "absolute",
  },
  textInput: {
    left: 17,
    top: 15,
    fontFamily: FontFamily.sansationLight,
    
  },
  resetPassword1: {
    fontFamily: FontFamily.sansation,
  },
  resetPassword: {
    fontSize: FontSize.size_xl,
  },
  enterYourEmail: {
    fontSize: FontSize.size_base,
  },
  enterYourEmailAndNewPassw: {
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  resetPasswordEnterContainer1: {
    width: "100%",
  },
  resetPasswordEnterContainer: {
    top: 60,
    height: 97,
    width: 329,
    color: Color.colorDarkslateblue_100,
    left: 33,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    height: 60,
    width: 329,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  email: {
    left: 15,
  },
  rectangleParent: {
    top: 174,
    left: 33,
    height: 60,
  },
  rectangleGroup: {
    top: 286,
  },
  confirmPassword: {
    left: 21,
  },
  rectangleContainer: {
    top: 402,
  },
  rectangleView: {
    backgroundColor: Color.colorDarkslateblue_200,
    borderWidth: 1,
    borderColor: Color.colorDarkslateblue_200,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  submit: {
    left: 89,
    color: Color.colorWhite,
    width: 63,
    height: 27,
    textAlign: "left",
    top: 21,
    fontFamily: FontFamily.sansationBold,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupPressable: {
    top: 562,
    left: 70,
  },
  resetPasswordPage: {
    flex: 1,
    height: 685,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default ResetPasswordPage;

