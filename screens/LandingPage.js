import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.landingPage}>
      <View style={styles.landingPageBackground} />
      <Image
        style={styles.ellipseTopLeft}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.ellipseMiddleLeft}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.ellipseTopCenter}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.ellipseBottomRight}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.ellipseMiddleRight}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.ellipseSmall1}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={styles.ellipseSmall2}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={styles.ellipseLarge}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.ellipseBottomMiddle}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          contentFit="cover"
          source={require("../assets/lead-city-logo-1.png")}
        />
      </View>
      <Text style={styles.lcuConnect}>
        <Text style={styles.lcu}>LCU</Text>
        <Text style={styles.connect}> Connect.</Text>
      </Text>
      <Text style={styles.tagline}>
        "Connecting Lead City, One Post at a Time"
      </Text>
      <Pressable
        style={styles.loginButton}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </Pressable>
      <Pressable
        style={styles.registerContainer}
        onPress={() => navigation.navigate("SignUpPage")}
      >
        <Text style={styles.registerText}>
          <Text style={styles.lcu}>{`Don't have an account?
        `}</Text>
          <Text style={styles.connect}>Register</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  landingPage: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: "100%",
  },
  landingPageBackground: {
    position: "absolute",
    width: "100%",
    height: "50%",
    backgroundColor: Color.colorDarkslateblue_200,
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  ellipseTopLeft: {
    position: "absolute",
    top: -8,
    left: -74,
    width: 185,
    height: 159,
  },
  ellipseMiddleLeft: {
    position: "absolute",
    top: 110,
    left: 37,
    width: 98,
    height: 92,
  },
  ellipseTopCenter: {
    position: "absolute",
    top: -73,
    left: "50%",
    transform: [{ translateX: -113.5 }],
    width: 227,
    height: 227,
  },
  ellipseBottomRight: {
    position: "absolute",
    top: 314,
    left: 5,
    width: 181,
    height: 181,
  },
  ellipseMiddleRight: {
    position: "absolute",
    top: 246,
    left: -30,
    width: 200,
    height: 200,
    right: 0,
  },
  ellipseSmall1: {
    position: "absolute",
    top: 154,
    left: 146,
    width: 23,
    height: 23,
  },
  ellipseSmall2: {
    position: "absolute",
    top: 223,
    left: 146,
    width: 18,
    height: 18,
  },
  ellipseLarge: {
    position: "absolute",
    top: 147,
    left: 230,
    width: 40,
    height: 39,
  },
  ellipseBottomMiddle: {
    position: "absolute",
    top: 187,
    left: 270,
    width: 148,
    height: 122,
  },
  logoContainer: {
    position: "absolute",
    top: 324,
    left: "50%",
    transform: [{ translateX: -83 }],
    borderRadius: 142,
    width: 166,
    height: 171,
    overflow: "hidden",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  lcuConnect: {
    position: "absolute",
    top: 487,
    left: "55%",
    transform: [{ translateX: -98.5 }],
    fontSize: 32,
    letterSpacing: 0.3,
    textAlign: "center",
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  lcu: {
    color: Color.colorBlack,
    fontFamily: FontFamily.sansationRegular, // Adjusted to Sansation Bold
  },
  connect: {
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.sansationRegular,

     // Adjusted to Sansation Regular
  },
  tagline: {
    position: "absolute",
    top: 549,
    left: "50%",
    transform: [{ translateX: -165 }],
    fontSize: FontSize.size_xl,
    color: "rgba(0, 0, 0, 0.9)",
    width: 330,
    textAlign: "center",
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  loginButton: {
    position: "absolute",
    top: 651,
    left: "50%",
    transform: [{ translateX: -118.5 }],
    width: 237,
    height: 49,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorDarkslateblue_200,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  registerContainer: {
    position: "absolute",
    top: 723,
    left: "50%",
    transform: [{ translateX: -94.5 }],
    width: 189,
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    fontSize: FontSize.size_base,
    letterSpacing: 0.2,
    textAlign: "center",
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    color: Color.colorBlack,
  },
});

export default LandingPage;
