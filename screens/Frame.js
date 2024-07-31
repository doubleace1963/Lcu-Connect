import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerParent}>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <View style={[styles.leadCityLogo2Parent, styles.leadLayout]}>
          <Image
            style={[styles.leadCityLogo2, styles.leadLayout]}
            contentFit="cover"
            source={require("../assets/lead-city-logo-2.png")}
          />
          <Text style={styles.lcuConnect}>
            <Text style={styles.lcuConnectTxtContainer}>
              <Text style={styles.lcu}>{`Lcu `}</Text>
              <Text style={styles.connect}>Connect</Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Pressable
          style={styles.maskGroup}
          onPress={() => navigation.navigate("ProfilePage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
        </Pressable>
        <Image
          style={[styles.image3Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={[styles.image4Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
      </View>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    height: 64,
    width: 395,
    left: 0,
    top: 0,
    position: "absolute",
  },
  leadLayout: {
    height: 28,
    position: "absolute",
  },
  iconLayout: {
    width: 19,
    top: 22,
    height: 19,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorWhite,
  },
  leadCityLogo2: {
    width: 31,
    left: 0,
    top: 0,
    height: 28,
  },
  lcu: {
    color: Color.colorBlack,
  },
  connect: {
    color: Color.colorDarkslateblue_200,
  },
  lcuConnectTxtContainer: {
    width: "100%",
  },
  lcuConnect: {
    top: 2,
    left: 31,
    fontSize: FontSize.size_base,
    letterSpacing: 0.2,
    fontWeight: "300",
    fontFamily: FontFamily.sansationLight,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 98,
    height: 24,
    position: "absolute",
  },
  leadCityLogo2Parent: {
    top: 18,
    left: 20,
    width: 129,
  },
  image1Icon: {
    right: 185,
    bottom: 23,
    width: 24,
    height: 19,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  maskGroup: {
    left: 226,
    width: 23,
    top: 22,
    height: 19,
    position: "absolute",
  },
  image3Icon: {
    left: 312,
  },
  image4Icon: {
    left: 271,
  },
  image5Icon: {
    top: 133,
    height: 173,
    width: 395,
    left: 0,
    position: "absolute",
  },
  headerParent: {
    flex: 1,
    height: 685,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame;
