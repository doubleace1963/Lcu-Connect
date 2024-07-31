import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ProfilePage = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await AsyncStorage.getItem('userData');
        if (user) {
          setUserData(JSON.parse(user));
        }
      } catch (error) {
        console.error('Failed to load user data', error);
      }
    };
    
    fetchData();
  }, []);
  return (
    <View style={styles.profilePage}>
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
        <Pressable
          style={styles.image1}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </Pressable>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Pressable 
            style={[styles.image3Icon, styles.iconLayout]}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Image
                    style={styles.icon1}
                    contentFit="cover"
                    source={require("../assets/image-3.png")}
                />
        </Pressable>
        <Pressable
          style={[styles.image4Icon, styles.iconLayout]}
          onPress={() => navigation.navigate("SearchPage")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </Pressable>
      </View>
      <View style={styles.mail}>
        <Text style={styles.email}>Email</Text>
        <TextInput style={[styles.mailChild, styles.childPosition]} value={userData?.email} editable={false} />
      </View>
      <View style={[styles.name, styles.idmatricLayout]}>
        <Text style={styles.email}>Name</Text>
        <TextInput style={[styles.nameChild, styles.childPosition]} value={userData?.name} editable={false} />
      </View>
      <View style={[styles.idmatricNo, styles.idmatricLayout]}>
        <Text style={styles.email}>ID/Matric No</Text>
        <TextInput style={[styles.nameChild, styles.childPosition]} value={userData?.matricNo} editable={false} />
      </View>
      <View style={[styles.idmatricNo2, styles.idmatricLayout]}>
        <Text style={styles.email}>Level</Text>
        <TextInput style={[styles.nameChild, styles.childPosition]} value={userData?.level} editable={false} />
      </View>
      <View style={[styles.idmatricNo3, styles.idmatricLayout]}>
        <Text style={styles.email}>Department</Text>
        <TextInput style={[styles.nameChild, styles.childPosition]} value={userData?.department} editable={false} />
      </View>
      <Pressable
          style={[styles.updateProfileParent, styles.updateLayout1]}
          onPress={() => navigation.navigate("UpdateProfilePage")}
        >
          <View style={[styles.updateProfile, styles.updateLayout1]}>
            <View style={[styles.updateProfileChild, styles.updateLayout]} />
          </View>
          <Text style={[styles.updateProfile1, styles.logOutTypo]}>
            Update Profile
          </Text>
        </Pressable>
        <Pressable
          style={[styles.updateProfileGroup, styles.updateLayout1]}
          onPress={() => navigation.navigate("ResetPasswordPage")}
        >
          <View style={[styles.updateProfile, styles.updateLayout1]}>
            <View style={[styles.updateProfileChild, styles.updateLayout]} />
          </View>
          <Text style={[styles.updateProfile1, styles.logOutTypo]}>
            Reset Password
          </Text>
        </Pressable>
      <Pressable
        style={[styles.updateProfileContainer, styles.updateLayout1]}
        onPress={() => navigation.navigate("LandingPage")}
      >
        <View style={[styles.updateProfile, styles.updateLayout1]}>
          <View style={[styles.updateProfileInner, styles.updateLayout]} />
        </View>
        <Text style={[styles.logOut, styles.logOutTypo]}>LOG OUT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    height: 64,
    width: 395,
    position: "absolute",
    left: 0,
    top: 0,
    
  },
  leadLayout: {
    height: 28,
    position: "absolute",
  },
  iconLayout: {
    width: 19,
    top: 35,
    height: 19,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    top: 26,
    width: 290,
    left: 0,
    position: "absolute",
    color: "black"
  },
  idmatricLayout: {
    height: 55,
    width: 290,
    left: 41,
    position: "absolute",
  },
  updateLayout1: {
    height: 50,
    width: 290,
    position: "absolute",
  },
  updateLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    height: 50,
    width: 290,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  logOutTypo: {
    height: 27,
    width: 150,
    justifyContent: "center",
    left: 70,
    top: 17,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorWhite,
  },
  leadCityLogo2: {
    width: 31,
    left: 0,
    top: 13,
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
    top: 20,
    left: 31,
    width: 98,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  leadCityLogo2Parent: {
    top: 18,
    left: 20,
    width: 129,
  },
  icon: {
    height: "100%",
    width: "100%",
    top: 11,
  },
  icon1: {
    height: "100%",
    width: "100%",
    top: 0,
  },
  image1: {
    right: 185,
    bottom: 23,
    width: 24,
    height: 19,
    position: "absolute",
  },
  maskGroupIcon: {
    left: 226,
    width: 23,
    top: 35,
    height: 19,
    position: "absolute",
  },
  image3Icon: {
    left: 312,
  },
  image4Icon: {
    left: 271,

  },
  email: {
    fontWeight: "900",
    fontFamily: FontFamily.sansationLight,
    textAlign: "left",
    color: Color.colorDarkslateblue_200,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    position: "absolute",
    color: "grey"
  },
  mailChild: {
    height: 30,
  },
  mail: {
    top: 163,
    height: 56,
    width: 290,
    left: 41,
    position: "absolute",
  },
  nameChild: {
    height: 29,
  },
  name: {
    top: 94,
  },
  idmatricNo: {
    top: 233,
  },
  idmatricNo2: {
    top: 302,
  },
  idmatricNo3: {
    top: 371,
  },
  updateProfileChild: {
    borderColor: Color.colorDarkslateblue_200,
  },
  updateProfile: {
    left: 0,
    top: 0,
  },
  updateProfile1: {
    color: Color.colorDarkslateblue_100,
  },
  updateProfileParent: {
    top: 464,
    left: 41,
    height: 50,
  },
  updateProfileGroup: {
    top: 535,
    left: 41,
    height: 50,
  },
  updateProfileInner: {
    borderColor: Color.colorBlack,
  },
  logOut: {
    color: Color.colorBlack,
  },
  updateProfileContainer: {
    top: 606,
    left: 41,
    height: 50,
  },
  profilePage: {
    flex: 1,
    height: 685,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default ProfilePage;
  

