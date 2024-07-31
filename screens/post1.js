import * as React from "react";
import { Text, StyleSheet, View, Linking, Pressable } from "react-native";
import { Image } from "expo-image";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Post1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.post2}>
      <Text style={[styles.leadCityUniversity, styles.download1IconPosition]}>
        Lead City University announces 20th Matriculation Ceremony.
      </Text>
      <View
        style={[styles.friday25Jan2024Parent, styles.download1IconPosition]}
      >
        <Text style={[styles.friday25JanContainer, styles.text13Typo]}>
          <Text style={styles.friday25Jan}>Friday, 26 Jan 2023</Text>
          <Text style={styles.text}>.</Text>
        </Text>
        <View style={[styles.rectangleParent, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
        </View>
      </View>
      <Image
        style={[styles.download1Icon, styles.download1IconPosition]}
        contentFit="cover"
        source={require("../assets/download-1.png")}
      />
      <View style={styles.table1}>
        <View style={styles.table}>
          <View style={[styles.row, styles.rowFlexBox1]}>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>Date</Text>
              </View>
            </View>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>Monday, January 29, 2024</Text>
              </View>
            </View>
          </View>
          <View style={styles.rowFlexBox}>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>⏰ Time</Text>
              </View>
            </View>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>{`Time10:00 am – 3:00 pm️ `}</Text>
              </View>
            </View>
          </View>
          <View style={styles.rowFlexBox}>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>Venue</Text>
              </View>
            </View>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>Adeline Halll, LCU</Text>
              </View>
            </View>
          </View>
          <View style={styles.rowFlexBox}>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>Dress Code</Text>
              </View>
            </View>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>
                  LCU Branded ties and scarves, University dress code
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.row4, styles.rowFlexBox]}>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>Arrival</Text>
              </View>
            </View>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>
                  30 Minutes before allocated Session
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.row5, styles.rowFlexBox]}>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>Guests</Text>
              </View>
            </View>
            <View style={styles.cell}>
              <View style={[styles.content, styles.rowFlexBox1]}>
                <Text style={styles.text1}>
                  Maximum of two guests per student
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.leadCityUniversity1, styles.leadTypo]}>
        Lead City University (LCU) is gearing up for its 20th Matriculation
        Ceremony, a significant event marking the beginning of the academic
        journey for its 2023/2024 batch of newly admitted candidates. Scheduled
        for Monday, January 29, 2024, the ceremony promises to be a blend of
        tradition and excitement, welcoming fresh talents into the university’s
        diverse academic community.
      </Text>
      <View style={styles.firstSession1000Am110Parent}>
        <Text
          style={[styles.firstSession1000Container, styles.containerFlexBox]}
        >
          <Text style={styles.firstSession1000Container1}>
            <Text
              style={styles.anEventOfTypo}
            >{`First Session: 10:00 am – 11:00 am
`}</Text>
            <Text style={styles.text13Typo}>{`

`}</Text>
            <Text style={styles.facultiesInvolved}>{`Faculties Involved:
            
`}</Text>
            <Text
              style={styles.text13Typo}
            >{`Faculty of Management and Social Sciences
Faculty of Arts
Faculty of Education
Faculty of Environmental Design and Management`}</Text>
          </Text>
        </Text>
        <Text style={[styles.anEventOfContainer, styles.containerFlexBox1]}>
          <Text style={styles.firstSession1000Container0}>
            <Text
              style={[styles.anEventOf, styles.anEventOfTypo]}
            >{`An Event of Prestige and Celebration
`}</Text>
            <Text style={styles.lcuConnectTypo}>{`

The Matriculation Ceremony at Lead City University is not just a formal event; it’s a celebration of new beginnings and academic aspirations. Spanning from 10:00 am to 3:00 pm, the event is divided into three distinct sessions, each catering to different faculties:`}</Text>
          </Text>
        </Text>
        <Text
          style={[styles.secondSession12Container, styles.containerFlexBox]}
        >
          <Text style={styles.firstSession1000Container1}>
            <Text
              style={styles.anEventOfTypo}
            >{`Second Session: 12 Noon – 1:00 pm
`}</Text>
            <Text style={styles.text13Typo}>{`

`}</Text>
            <Text style={styles.facultiesInvolved}>{`Faculties Involved:

`}</Text>
            <Text style={styles.text13Typo}>{`Faculty of Sciences
Faculty of Law
Faculty of Communication and Information Sciences
Faculty of Engineering and Technology`}</Text>
          </Text>
        </Text>
        <Text
          style={[styles.conclusionTheLeadContainer, styles.containerFlexBox1]}
        >
          <Text style={styles.firstSession1000Container4}>
            <Text style={styles.anEventOfTypo}>{`Conclusion

`}</Text>
            <Text style={styles.text13Typo}>
              The Lead City University Matriculation Ceremony is more than just
              an event; it’s the first step on your exciting academic journey.
              As you prepare for this milestone, remember that it marks the
              beginning of an adventure filled with learning, growth, and
              opportunities. Welcome to Lead City University – where your
              academic dreams start to take shape!
            </Text>
          </Text>
        </Text>
        <Text style={[styles.whatToExpectContainer, styles.containerPosition]}>
          <Text style={styles.firstSession1000Container3}>
            <Text style={styles.anEventOfTypo}>{`What to Expect on the Day

`}</Text>
            <Text style={styles.text13Typo}>
              The Matriculation Ceremony at LCU is a formal recognition of your
              entry into the university. It’s a day filled with the promise of
              academic excellence and the pursuit of knowledge. You’ll be part
              of a significant tradition, donning your matriculation gown and
              officially becoming a member of the LCU community.
            </Text>
          </Text>
        </Text>
        <Text
          style={[
            styles.importantInformationForContainer,
            styles.containerPosition,
          ]}
        >
          <Text style={styles.firstSession1000Container2}>
            <Text
              style={styles.anEventOfTypo}
            >{`Important Information for Matriculating Students


`}</Text>
            <Text style={styles.text13Typo}>
              {`Gown Collection: Students are to collect their matriculation gowns from their respective Faculty offices on Friday, January 26.
Dress Code: It is crucial to adhere to the university’s dress code. `}
            </Text>
            <Text style={styles.text13Typo}>
              <Text style={styles.student1}>Student</Text>
            </Text>
            <Text style={styles.text13Typo}>
              {`s should be seated at Adeline Hall at least 30 minutes before their allocated time slot.
Guest Policy: Each student is permitted to be accompanied by no more than two guests to ensure the smooth conduct of the ceremony.
Dressing Requirements: LCU branded ties (for males) and scarves (for females) are compulsory for this official event.`}
            </Text>
          </Text>
        </Text>
        <Text
          style={[styles.thirdSession200Container, styles.containerFlexBox]}
        >
          <Text style={styles.firstSession1000Container1}>
            <Text
              style={styles.anEventOfTypo}
            >{`Third Session: 2:00 pm – 3:00 pm
`}</Text>
            <Text style={styles.text13Typo}>{`

`}</Text>
            <Text style={styles.facultiesInvolved}>
              Colleges and Faculties Involved
            </Text>
            <Text style={styles.text13Typo}>{`:
College of Medicine
Faculty of Pharmacy`}</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <View style={[styles.leadCityLogo2Parent, styles.leadLayout]}>
          <Image
            style={[styles.leadCityLogo2, styles.leadLayout]}
            contentFit="cover"
            source={require("../assets/lead-city-logo-2.png")}
          />
          <Text style={[styles.lcuConnect, styles.containerFlexBox1]}>
            <Text style={styles.firstSession1000Container1}>
              <Text style={styles.text}>{`Lcu `}</Text>
              <Text style={styles.connect}>Connect</Text>
            </Text>
          </Text>
        </View>
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

        <Pressable 
          onPress={() => navigation.navigate('HomePage')}
          style={[styles.maskGroup, styles.maskGroupLayout]}
        >
          <Image
            style={styles.icon1}
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
  download1IconPosition: {
    left: 11,
    position: "absolute",
  },
  text13Typo: {
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  groupPosition: {
    height: 1,
    left: 0,
    position: "absolute",
  },
  rowFlexBox1: {
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  rowFlexBox: {
    marginTop: 3,
    flexDirection: "row",
    backgroundColor: Color.colorGray_100,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  leadTypo: {
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
  },
  containerFlexBox: {
    width: 340,
    alignItems: "center",
    display: "flex",
    left: 2,
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sansationBold,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  containerFlexBox1: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  anEventOfTypo: {
    fontWeight: "700",

  },
  containerPosition: {
    left: 6,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
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
  leadCityUniversity: {
    top: 80,
    fontSize: FontSize.size_2xl,
    width: 374,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.sansationBold,
    letterSpacing: 0.2,
  },
  friday25Jan: {
    color: Color.colorDarkslateblue_100,
  },
  text: {
    color: Color.colorBlack,
  },
  friday25JanContainer: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.1,
    width: 187,
    height: 11,
    left: 0,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_100,
    top: 0,
    height: 1,
    width: 341,
  },
  groupItem: {
    backgroundColor: Color.colorDarkslateblue_200,
    width: 140,
    top: 0,
    height: 1,
  },
  rectangleParent: {
    top: 19,
    width: 341,
  },
  friday25Jan2024Parent: {
    top: 168,
    height: 20,
    width: 341,
  },
  download1Icon: {
    top: 211,
    borderRadius: Border.br_xl,
    width: 358,
    height: 194,
  },
  text1: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    color: Color.colorBlack,
    flex: 1,
  },

  cell: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    width: 122,
    backgroundColor: Color.colorGray_100,
    alignSelf: "stretch",
    borderColor: Color.colorSilver,
    borderStyle: "solid",
  },
  row: {
    backgroundColor: Color.colorGray_100,
  },
  row4: {
    height: 69,
  },
  row5: {
    height: 61,
  },
  table: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    width: 246,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  table1: {
    top: 668,
    left: 75,
    height: 436,
    width: 246,
    position: "absolute",
  },
  leadCityUniversity1: {
    top: 433,
    height: 234,
    width: 355,
    left: 20,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    position: "absolute",
  },
  facultiesInvolved: {
    fontFamily: FontFamily.sansation,
  },
  firstSession1000Container0: {
    width: "100%", 
    fontFamily: FontFamily.sansation,
  },
  firstSession1000Container1: {
    width: "100%", 
  },
  firstSession1000Container2: {
    width: "100%", 
    fontFamily: FontFamily.sansation,
  },
  firstSession1000Container3: {
    width: "100%", 
    fontFamily: FontFamily.sansation,
  },
  firstSession1000Container4: {
    width: "100%", 
    fontFamily: FontFamily.sansation,
  },
  firstSession1000Container: {
    top: 219,
  },
  anEventOf: {
    fontSize: FontSize.size_xl,
    
  },
  lcuConnectTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  anEventOfContainer: {
    width: 355,
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
  },
  secondSession12Container: {
    top: 446,
  },
  conclusionTheLeadContainer: {
    top: 1550,
    left: 5,
    width: 322,
    height: 210,
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
  },
  whatToExpectContainer: {
    top: 1307,
    width: 309,
  },
  student1: {
    textDecoration: "underline",
  },
  importantInformationForContainer: {
    top: 868,
    width: 320,
    height: 377,
  },
  thirdSession200Container: {
    top: 655,
    width: 326,
    height: 128,
    left: 2,
    display: "flex",
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
  },
  firstSession1000Am110Parent: {
    top: 1105,
    height: 1760,
    width: 355,
    left: 20,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorWhite,
    height: 64,
    width: 395,
  },
  leadCityLogo2: {
    width: 31,
    left: 0,
    top: 15,
  },
  connect: {
    color: Color.colorDarkslateblue_200,
  },
  lcuConnect: {
    top: 20,
    left: 31,
    textAlign: "center",
    width: 98,
    height: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    letterSpacing: 0.2,
  },
  leadCityLogo2Parent: {
    top: 18,
    width: 129,
    left: 20,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icon1: {
    height: "100%",
    width: "100%",
    right: 40,
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
    bottom: 12,
    width: 24,
  },
  post2: {
    height: 3111,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Post1;

