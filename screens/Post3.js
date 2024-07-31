import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Post3 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.post3}>
        <Text style={[styles.leadCityUniversity, styles.leadFlexBox]}>
          Lead City University 16th Convocation Ceremony: Schedule of Events Released.
        </Text>
        <View style={styles.friday1Dec2023Parent}>
          <Text style={styles.friday1DecContainer}>
            <Text style={styles.friday1Dec}>Friday, 1 Dec 2023</Text>
            <Text style={styles.text}>.</Text>
          </Text>
          <View style={[styles.rectangleParent, styles.groupPosition]}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            <View style={[styles.groupItem, styles.groupPosition]} />
          </View>
        </View>
        <Image
          style={styles.download2Icon}
          contentFit="cover"
          source={require("../assets/download-2.png")}
        />
        <Image
          style={styles.leadCityUniversityConvocatiIcon}
          contentFit="cover"
          source={require("../assets/leadcityuniversityconvocationceremony-1.png")}
        />
        <View style={[styles.header, styles.headerPosition]}>
          <View style={[styles.headerChild, styles.headerPosition]} />
          <View style={[styles.leadCityLogo2Parent, styles.leadLayout1]}>
            <Image
              style={[styles.leadCityLogo2, styles.leadLayout1]}
              contentFit="cover"
              source={require("../assets/lead-city-logo-2.png")}
            />
            <Text style={[styles.lcuConnect, styles.lcuConnectTypo]}>
              <Text style={styles.lcuConnectTxtContainer}>
                <Text style={styles.text}>{`Lcu `}</Text>
                <Text style={styles.connect}>Connect</Text>
              </Text>
            </Text>
          </View>
          <Pressable
            style={[styles.maskGroup, styles.image1Layout]}
            onPress={() => navigation.navigate("ProfilePage")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/mask-group.png")}
            />
          </Pressable>
          <Image
            style={[styles.image3Icon, styles.image4Layout]}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
          <Pressable
            style={[styles.image4, styles.image4Layout]}
            onPress={() => navigation.navigate("SearchPage")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-4.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image1, styles.image1Layout]}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/image-1.png")}
            />
          </Pressable>
          <View style={styles.leadCityUniversity16thConvParent}>
            <Text
              style={[styles.leadCityUniversity1, styles.theManagementOfTypo]}
            >
              Lead City University 16th convocation ceremony schedule of events
              has been released. Details are as follows;
            </Text>
            <Text style={[styles.theManagementOf, styles.theManagementOfTypo]}>
              The Management of Lead City University, Ibadan wishes to inform and
              invites the general public to the 16th Convocation Ceremony of the
              University which has been scheduled to hold from Friday, 1st –
              Wednesday, 6th December, 2023.
            </Text>
          </View>
          <View
            style={[styles.leadCityUniversityConvocatiWrapper, styles.leadLayout]}
          >
            <Text style={[styles.leadCityUniversityContainer, styles.leadLayout]}>
              <Text
                style={styles.leadCityUniversity2}
              >{`Lead City University Convocation Ceremony Schedule of Events
`}</Text>
              <Text style={styles.lcuConnectTypo}>{`
Convocation Ceremony starts 11:00 for the three days
The doors of Audience Hall will be opened for GRADUANDS ONLY between 9:00am – 10:30am
Each Graduands shall be allowed a maximum of two (2) guests with invitation cards, no Children in the hall, please
All guests shall be seated on the Audience Hall by 10:30am 
Photographers are not allowed in the Hall.
Thank you!`}</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  leadFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupPosition: {
    height: 1,
    left: 0,
    position: "absolute",
  },
  headerPosition: {
    width: 395,
    left: 0,
    top: 0,
    position: "absolute",
  },
  leadLayout1: {
    height: 28,
    position: "absolute",
  },
  lcuConnectTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  image1Layout: {
    height: 19,
    position: "absolute",
  },
  image4Layout: {
    width: 19,
    height: 19,
    top: 35,
    position: "absolute",
  },
  theManagementOfTypo: {
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    left: 0,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  leadLayout: {
    width: 284,
    position: "absolute",
  },
  leadCityUniversity: {
    top: 130,
    fontSize: FontSize.size_2xl,
    width: 324,
    height: 81,
    fontFamily: FontFamily.sansation,
    letterSpacing: 0.2,
    position: "absolute",
    left: 20,
  },
  friday1Dec: {
    color: Color.colorDarkslateblue_100,
  },
  text: {
    color: Color.colorBlack,
  },
  friday1DecContainer: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.1,
    width: 187,
    height: 11,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    left: 0,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_100,
    top: 0,
    width: 341,
  },
  groupItem: {
    backgroundColor: Color.colorDarkslateblue_200,
    width: 140,
    top: 0,
  },
  rectangleParent: {
    top: 19,
    width: 341,
  },
  friday1Dec2023Parent: {
    top: 198,
    height: 20,
    width: 341,
    left: 20,
    position: "absolute",
  },
  download2Icon: {
    top: 240,
    left: 22,
    borderRadius: 11,
    width: 353,
    height: 183,
    position: "absolute",
  },
  leadCityUniversityConvocatiIcon: {
    top: 711,
    left: 61,
    borderRadius: Border.br_3xs,
    width: 276,
    height: 400,
    position: "absolute",
  },
  headerChild: {
    height: 64,
    backgroundColor: Color.colorWhite,
  },
  leadCityLogo2: {
    width: 31,
    left: 0,
    top: 13,
  },
  connect: {
    color: Color.colorDarkslateblue_200,
  },
  lcuConnectTxtContainer: {
    width: "100%",
  },
  lcuConnect: {
    top: 19,
    left: 31,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 98,
    height: 24,
    letterSpacing: 0.2,
    position: "absolute",
  },
  leadCityLogo2Parent: {
    top: 18,
    width: 129,
    left: 20,
  },
  icon: {
    height: "100%",
    width: "100%",
    top: 0,
  },
  icon1: {
    height: "100%",
    width: "100%",
    top: 12,
  },
  maskGroup: {
    left: 226,
    width: 23,
    top: 35,
    height: 19,
  },
  image3Icon: {
    left: 312,
  },
  image4: {
    left: 271,
  },
  image1: {
    right: 180,
    bottom: 1461,
    width: 24,
  },
  leadCityUniversity1: {
    width: 348,
    height: 63,
    top: 0,
  },
  theManagementOf: {
    top: 87,
    height: 137,
    width: 351,
  },
  leadCityUniversity16thConvParent: {
    top: 465,
    left: 23,
    height: 224,
    width: 351,
    position: "absolute",
  },
  leadCityUniversity2: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sansationBold,
  },
  leadCityUniversityContainer: {
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
  },
  leadCityUniversityConvocatiWrapper: {
    top: 1172,
    left: 45,
    height: 330,
  },
  header: {
    height: 1502,
  },
  post3: {
    flex: 1,
    height: 1845,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Post3;

