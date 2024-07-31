import * as React from "react";
import { Text, StyleSheet, View, Pressable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();
  
  
  return (
    <View style={styles.homePage}>
      <Text style={[styles.generalAnnouncements]}>General Announcements</Text>
      <Pressable
        style={[styles.post1, styles.postLayout]}
        onPress={() => navigation.navigate("Post")}
      >
        <View style={[styles.post1Child, styles.groupChildPosition]} />
        <Image
          style={styles.leadCityLogo3}
          contentFit="cover"
          source={require("../assets/lead-city-logo-3.png")}
        />
        <Text
          style={[
            styles.sessionTimelineBreakdownContainer,
            styles.generalAnnouncementsTypo,
          ]}
        >
          <Text style={styles.text}>{`

`}</Text>
          <Text style={styles.sessionTimelineBreakdownOf}>
            <Text
              style={styles.sessionTimelineBreakdown}
            >{`2023/2024 Session Timeline. Breakdown of all the Activities. 
`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
        </Text>
        <Text style={[styles.text1, styles.text1Typo]}>{`

`}</Text>
        <Text style={[styles.monday25JunContainer, styles.text1Typo]}>
          <Text style={styles.monday25Jun}>Thursday, 25 Jun 2023</Text>
          <Text style={styles.sessionTimelineBreakdownOf}>.</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.post2, styles.postLayout]}
        onPress={() => navigation.navigate("post1")}
      >
        <View style={[styles.post1Child, styles.groupChildPosition]} />
        <Image
          style={styles.leadCityLogo3}
          contentFit="cover"
          source={require("../assets/lead-city-logo-3.png")}
        />
        <Text
          style={[
            styles.sessionTimelineBreakdownContainer,
            styles.generalAnnouncementsTypo,
          ]}
        >
          <Text style={styles.text}>{`

`}</Text>
          <Text style={styles.sessionTimelineBreakdownOf}>
            <Text
              style={styles.sessionTimelineBreakdown}
            >{`Lead City announces 20th Matriculation Ceremony. 
`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
        </Text>
        <Text style={[styles.text1, styles.text1Typo]}>{`

`}</Text>
        <Text style={[styles.monday25JunContainer, styles.text1Typo]}>
          <Text style={styles.monday25Jun}>Friday, 26 Jun 2023</Text>
          <Text style={styles.sessionTimelineBreakdownOf}>.</Text>
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Post2")}>
      <View style={[styles.post3, styles.postLayout]}>
        <View style={[styles.post1Child, styles.groupChildPosition]} />
        <Image
          style={styles.leadCityLogo3}
          contentFit="cover"
          source={require('../assets/lead-city-logo-3.png')}
        />
        <Text style={[styles.sessionTimelineBreakdownContainer, styles.generalAnnouncementsTypo]}>
          <Text style={styles.text}>{`\n`}</Text>
          <Text style={styles.sessionTimelineBreakdownOf}>
            <Text style={styles.sessionTimelineBreakdown}>
              {`Lead City University Approved Dress Code.  \n`}
            </Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
        </Text>
        <Text style={[styles.text1, styles.text1Typo]}>{`\n`}</Text>
        <Text style={[styles.monday25JunContainer, styles.text1Typo]}>
          <Text style={styles.monday25Jun}>Friday, 25 Jan 2024</Text>
          <Text style={styles.sessionTimelineBreakdownOf}>.</Text>
        </Text>
      </View>
    </Pressable>
    <Pressable onPress={() => navigation.navigate('Post3')}>
      <View style={[styles.post4, styles.postLayout]}>
        <View style={[styles.post1Child, styles.groupChildPosition]} />
        <Image
          style={styles.leadCityLogo3}
          contentFit="cover"
          source={require("../assets/lead-city-logo-3.png")}
        />
        <Text
          style={[
            styles.sessionTimelineBreakdownContainer,
            styles.generalAnnouncementsTypo,
          ]}
        >
          <Text style={styles.text}>{`

`}</Text>
          <Text style={styles.sessionTimelineBreakdownOf}>
            <Text
              style={styles.sessionTimelineBreakdown}
            >{`Lead City University 16th Convocation Ceremony. 
`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
        </Text>
        <Text style={[styles.text1, styles.text1Typo]}>{`

`}</Text>
        <Text style={[styles.monday25JunContainer, styles.text1Typo]}>
          <Text style={styles.monday25Jun}>Friday, 1 Dec 2023</Text>
          <Text style={styles.sessionTimelineBreakdownOf}>.</Text>
        </Text>
      </View>
    </Pressable>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <View style={[styles.leadCityLogo2Parent, styles.leadLayout]}>
          <Image
            style={[styles.leadCityLogo2, styles.leadLayout]}
            contentFit="cover"
            source={require("../assets/lead-city-logo-2.png")}
          />
          <Text style={[styles.lcuConnect, styles.text1Typo]}>
            <Text style={styles.lcuConnectTxtContainer}>
              <Text style={styles.sessionTimelineBreakdownOf}>{`LCU `}</Text>
              <Text style={styles.connect}>Connect</Text>
            </Text>
          </Text>
        </View>
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
          style={[styles.maskGroup1, styles.iconLayout]}
          onPress={() => navigation.navigate("SearchPage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </Pressable>
        <Image
          style={[styles.image1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Pressable
          style={[styles.maskGroup, styles.iconLayout]}
          onPress={() => navigation.navigate("ProfilePage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  generalAnnouncementsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sansation,
    position: "absolute",
  },
  postLayout: {
    height: 117,
    width: 393,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
  },
  text1Typo: {
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    position: "absolute",
  },
  headerPosition: {
    height: 64,
    width: 395,
    top: 0,
    left: 0,
    position: "absolute",
  },
  leadLayout: {
    height: 28,
    position: "absolute",
  },
  iconLayout: {
    height: 19,
    position: "absolute",
  },
  generalAnnouncements: {
    top: 105,
    fontWeight: "",
    width: 212,
    height: 14,
    color: Color.colorDarkslateblue_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sansationBold,
    left: 12,
  },
  post1Child: {
    height: 117,
    width: 393,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  leadCityLogo3: {
    top: 3,
    right: 20,
    width: 103,
    height: 111,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_8xs,
    color: Color.colorDarkslateblue_200,
  },
  sessionTimelineBreakdown: {
    fontSize: FontSize.size_mid,
  },
  blankLine: {
    fontSize: FontSize.size_8xs,
  },
  sessionTimelineBreakdownOf: {
    color: Color.color,
  },
  sessionTimelineBreakdownContainer: {
    top: 33,
    right: 128,
    width: 260,
    height: 49,
  },
  text1: {
    top: 71,
    left: 5,
    fontSize: FontSize.size_3xs,
    width: 230,
    height: 21,
    letterSpacing: 0.1,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
  },
  monday25Jun: {
    color: Color.colorDarkslateblue_100,
  },
  monday25JunContainer: {
    fontSize: FontSize.size_5xs,
    width: 187,
    height: 11,
    top: 22,
    letterSpacing: 0.1,
    fontWeight: "300",
    textAlign: "left",
    left: 12,
  },
  post1: {
    top: 132,
    left: 0,
    width: 393,
  },
  post2: {
    top: 262,
    left: 1,
  },
  post3: {
    top: 392,
    left: 0,
    width: 393,
  },
  post4: {
    top: 522,
    left: 0,
    width: 393,
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_100,
    width: 341,
    height: 1,
    top: 0,
    left: 0,
  },
  groupItem: {
    backgroundColor: Color.colorDarkslateblue_200,
    width: 180,
    top: 0,
    left: 0,
  },
  rectangleParent: {
    top: 125,
    left: 13,
    width: 341,
    height: 1,
  },
  headerChild: {
    backgroundColor: Color.colorWhite,
  },
  leadCityLogo2: {
    width: 31,
    top: 15,
    left: 0,
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
    letterSpacing: 0.2,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 98,
    height: 24,
    fontSize: FontSize.size_base,
  },
  leadCityLogo2Parent: {
    top: 18,
    left: 20,
    width: 129,
  },
  image3Icon: {
    left: 312,
    width: 19,
    height: 19,
    top: 35,
  },
  image4Icon: {
    left: 271,
    width: 19,
    height: 19,
    top: 35,
  },
  image1Icon: {
    right: 185,
    bottom: 23,
    width: 24,
    top: 35,
  },
  icon: {
    height: "100%",
    width: "100%",
    top: 13,
  },
  icon1: {
    height: "100%",
    width: "100%",
    top: 0,
  },
  maskGroup: {
    left: 226,
    width: 23,
    top: 22,
  },
  maskGroup1: {
    left: 265,
    width: 23,
    top: 22,
  },
  homePage: {
    flex: 1,
    height: 685,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
    paddingTop: 0,
  },
});

export default HomePage;
