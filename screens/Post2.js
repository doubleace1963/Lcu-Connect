import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Post2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.post4}>
        <View style={[styles.friday25Jan2024Parent, styles.download3IconPosition]}>
          <Text style={[styles.friday25JanContainer, styles.theContainerTypo]}>
            <Text style={styles.friday25Jan}>Friday, 25 Jan 2024</Text>
            <Text style={styles.text}>.</Text>
          </Text>
          <View style={[styles.rectangleParent, styles.groupPosition]}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            <View style={[styles.groupItem, styles.groupPosition]} />
          </View>
        </View>
        <Image
          style={[styles.download3Icon, styles.download3IconPosition]}
          contentFit="cover"
          source={require('../assets/download-3.png')}
        />
        <View style={[styles.theUniversityAttachesAGreaParent, styles.universityPosition]}>
          <Text style={[styles.theUniversityAttachesContainer, styles.theTypo]}>
            <Text style={styles.theContainerTypo}>
              The University attaches a great importance to modest and good
              dressing. Your dressing adds value to your personality, self
              confidence and self worth. This saying is very instructive; ”
            </Text>
            <Text style={[styles.dressTheWay, styles.theContainerTypo]}>
              Dress the way you would like to be addressed
            </Text>
            <Text style={styles.theContainerTypo}>{`”. 

Students are implored to abide strictly to the University dress code.  `}</Text>
          </Text>
          <Text style={[styles.theUniversityExpectsContainer, styles.theContainerTypo]}>
            <Text style={styles.theTypo}>{`The University expects all students to be decently and corporately dressed and have on them Identity Card, University branded Lapel Pins while on campus or on excursions or institutional engagements outside the University environment. 

Please note that all students must be formally dressed during school hours. Also male students are expected to put on a tie during official ceremonies and for everyday activities during school hours. 
Students will earn additional credits every semester for compliance to the dress code, participating in Professional Tuition programmes, satisfactory moral conduct, service to the University community, exemplary behaviour and excellence in sporting and extra curricular activities .

Visit the school portal to see the combination of the approved dress codes.`}</Text>
            <Text style={styles.blankLineTypo}> </Text>
          </Text>
        </View>
        <Text style={[styles.leadCityUniversity, styles.lcuConnectFlexBox]}>
          Lead City University Approved Dress Code 
        </Text>
        <View style={styles.headerPosition}>
          <View style={[styles.headerChild, styles.headerPosition]} />
          <View style={[styles.leadCityLogo2Parent, styles.leadLayout]}>
            <Image
              style={[styles.leadCityLogo2, styles.leadLayout]}
              contentFit="cover"
              source={require('../assets/lead-city-logo-2.png')}
            />
            <Text style={[styles.lcuConnect, styles.lcuConnectFlexBox]}>
              <Text style={styles.lcuConnectTxtContainer}>
                <Text style={styles.text}>{`Lcu `}</Text>
                <Text style={styles.connect}>Connect</Text>
              </Text>
            </Text>
          </View>
          <Pressable
            style={[styles.maskGroup, styles.maskGroupLayout]}
            onPress={() => navigation.navigate('ProfilePage')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/mask-group.png')}
            />
          </Pressable>
          <Image
            style={[styles.image3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require('../assets/image-3.png')}
          />
          <Pressable
            style={[styles.image4Icon, styles.iconLayout]}
            onPress={() => navigation.navigate('SearchPage')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/image-4.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.image1Icon, styles.maskGroupLayout]}
            onPress={() => navigation.navigate('HomePage')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/image-1.png')}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  download3IconPosition: {
    left: 27,
    position: "absolute",
  },
  theContainerTypo: {
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  groupPosition: {
    height: 1,
    left: 0,
    position: "absolute",
  },
  universityPosition: {
    left: 24,
    width: 347,
  },
  theTypo: {
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
  },
  lcuConnectFlexBox: {
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.2,
    position: "absolute",
  },
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
  maskGroupLayout: {
    height: 19,
    position: "absolute",
  },
  iconLayout: {
    width: 19,
    height: 19,
    top: 35,
    position: "absolute",
  },
  friday25Jan: {
    color: Color.colorDarkslateblue_100,
  },
  text: {
    color: Color.colorBlack,
  },
  friday25JanContainer: {
    width: 187,
    height: 11,
    textAlign: "left",
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
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
  friday25Jan2024Parent: {
    top: 189,
    height: 20,
    width: 341,
  },
  download3Icon: {
    top: 237,
    borderRadius: Border.br_3xs,
    width: 350,
    height: 168,
  },
  dressTheWay: {
    fontStyle: "italic",
  },
  theUniversityAttachesContainer: {
    height: 174,
    width: 347,
    color: Color.colorBlack,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  blankLineTypo: {
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
  },
  theUniversityExpectsContainer: {
    top: 196,
    width: 340,
    height: 453,
    color: Color.colorBlack,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  theUniversityAttachesAGreaParent: {
    top: 465,
    height: 649,
    width: 347,
    position: "absolute",
  },
  leadCityUniversity: {
    top: 140,
    fontSize: FontSize.size_2xl ,
    fontFamily: FontFamily.sansationBold,
    height: 95,
    width: 347,
    left: 24,
    color: Color.colorBlack,
    textAlign: "left",
  },
  headerChild: {
    backgroundColor: Color.colorWhite,
  },
  leadCityLogo2: {
    width: 31,
    left: 0,
    top: 11,
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
    width: 98,
    height: 24,
    fontSize: FontSize.size_base,
    display: "flex",
    letterSpacing: 0.2,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  leadCityLogo2Parent: {
    top: 18,
    left: 20,
    width: 129,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  image4Icon: {
    left: 271,
  },
  image1Icon: {
    right: 180,
    bottom: 11,
    width: 24,
  },
  post4: {
    flex: 1,
    height: 1172,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Post2;

