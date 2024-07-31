import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { ScrollView } from "react-native";
import { useState } from "react";
import { TextInput, Button } from "react-native";

const Post = () => {
  const navigation = useNavigation();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.post1}>
        <Image
          style={styles.image5Icon}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Text
          style={[
            styles.sessionTimelineBreakdownContainer,
            styles.resumptionFlexBox,
          ]}
        >
          <Text style={styles.sessionTimelineBreakdownContainer1}>
            <Text
              style={styles.sessionTimelineBreakdown}
            >{`2023/2024 Session Timeline. Breakdown of all the Activities. \n`}</Text>
          </Text>
        </Text>
        <Text style={[styles.monday25JunContainer, styles.resumptionTypo1]}>
          <Text style={styles.monday25Jun}>Thursday, 25 Jun 2023</Text>
          <Text style={styles.sessionTimelineBreakdown}>.</Text>
        </Text>
        <Text
          style={[
            styles.secondSemesterImportant,
            styles.secondSemesterImportantLayout,
          ]}
        >
          SECOND SEMESTER IMPORTANT DATES
        </Text>
        <Text
          style={[styles.noteSummerTerm, styles.resumptionTypo]}
        >{`NOTE: SUMMER TERM IS STRICTLY FOR STUDENTS ADMITTED DURING THE SECOND SEMESTER. NO OTHER STUDENTS WILL BE ALLOWED TO SIT FOR SUMMER EXAMINATION. 

All staff and students of our University community should take note of the important dates above.`}</Text>
        <View style={styles.commentsParent}>
  <TextInput
    style={styles.commentInput}
    value={comment}
    onChangeText={setComment}
    placeholder="You can comment here"
  />
  <View style={styles.submitButtonContainer}>
    <Button title="Submit" onPress={handleAddComment} />
  </View>
  <View style={styles.commentsContainer}>
    {comments.map((cmt, index) => (
      <Text key={index} style={styles.commentText}>
        {cmt}
      </Text>
    ))}
  </View>
</View>


        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <View style={[styles.groupChild1, styles.groupPosition]} />
        </View>
        <Text
          style={[
            styles.leadCityUniversityContainer,
            styles.theManagementOfTypo,
          ]}
        >
          <Text style={styles.sessionTimelineBreakdownContainer1}>
            <Text
              style={styles.leadCityUniversity}
            >{`LEAD CITY UNIVERSITY ACADEMIC CALENDER
            
            \n`}</Text>
            <Text style={styles.firstSemesterImportant}>
              {" "}
              FIRST SEMESTER IMPORTANT DATES 
            </Text>
          </Text>
        </Text>
        <Text style={[styles.theManagementOf, styles.theManagementOfTypo]}>
          The management of Lead City University, Ibadan has released the
          approved academic calendar and its important dates for the first and
          second semester of the 2023/2024 academic session. 
        </Text>
        <Text
          style={[styles.september25Resumption, styles.resumptionTypo]}
        >{`September 25: Resumption
September 27-29: Departmental Orientation
September 27-October 6: Registration
October 2: Lectures Begin
October 4: General Orientation for New Students  
October 17: Inaugural Lecture
October 24: Teachers’ Assembly
October 31: Management/Students Forum 
December 1: Convocation Play
December 1: Induction for Education Students 
December 4-5: Convocation Ceremony (Undergraduate) 
December 6: Convocation Ceremony (Postgraduate) 
December 8-15: Sandwich Programme Exams 
December 18-January 12: Christmas/New Year Break
January 15: Resumption from Christmas/New Year Break 
January 15-19: Revision 
January 19 & 21: Interdenominational Service
January 22: Matriculation
January 24-February 9: First Semester Exams 
February 16: End of First Semester `}</Text>
        <Text
          style={[styles.february19Resumption, styles.resumptionTypo]}
        >{`February 19: Resumption
February 20-March 1: Registration 
February 26: Lectures Begin 
March 2: 15th Foundation Day Celebrations 
March 14: Teachers’ Assembly 
March 21: Management/Students Forum 
May 17: Second Semester Lectures End
May 20-24: Revision 
March 24-30: VC’s Sports Competition & Departmental Week 
May 29-June 14: Second Semester Examination 
June 17-July 19: Summer Lectures 
July 22-26: Summer Examinations 
July 26: End of Session \n`}</Text>
        <View style={styles.headerPosition}>
          <View style={[styles.headerChild, styles.headerPosition]} />
          <View style={[styles.leadCityLogo2Parent, styles.leadLayout]}>
            <Image
              style={[styles.leadCityLogo2, styles.leadLayout]}
              contentFit="cover"
              source={require("../assets/lead-city-logo-2.png")}
            />
            <Text style={styles.lcuConnect}>
              <Text style={styles.sessionTimelineBreakdownContainer1}>
                <Text style={styles.sessionTimelineBreakdown}>{`Lcu `}</Text>
                <Text style={styles.text}>Connect</Text>
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
  resumptionFlexBox: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
    marginTop: 10,
  },
  resumptionTypo1: {
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    textAlign: "left",
  },
  secondSemesterImportantLayout: {
    width: 351,
    color: Color.colorDarkslateblue_100,
  },
  resumptionTypo: {
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  groupChildLayout: {
    height: 59,
    width: 346,
    position: "absolute",
  },
  commentsPosition: {
    top: 0,
    left: 0,
    bottom: 0,
  },
  image1IconLayout: {
    height: 19,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 314,
    position: "absolute",
  },
  groupItemPosition: {
    backgroundColor: Color.colorGainsboro_100,
    left: 0,
    top: 0,
  },
  groupPosition: {
    backgroundColor: Color.colorDarkslateblue_200,
    height: 1,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    width: 341,
    height: 1,
    position: "absolute",
  },
  commentsParent: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  comments: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  submitButtonContainer: {
    marginBottom: 20,
  },
  commentsContainer: {
    marginTop: 20,
  },
  commentText: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  theManagementOfTypo: {
    left: 13,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
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
  iconLayout: {
    width: 19,
    top: 35,
    height: 19,
    position: "absolute",
  },
  image5Icon: {
    top: 211,
    borderRadius: Border.br_mini,
    width: 371,
    height: 173,
    left: 11,
    position: "absolute",
  },
  text: {
    color: Color.colorDarkslateblue_200,
  },
  sessionTimelineBreakdown: {
    color: Color.colorBlack,
  },
  sessionTimelineBreakdownContainer1: {
    width: "100%",
  },
  sessionTimelineBreakdownContainer: {
    top: 83,
    right: 5,
    left: 10,
    fontSize: 24,
    width: 384,
    height: 53,
    textAlign: "left",
    fontFamily: FontFamily.sansation,
    letterSpacing: 0.2,
  },
  monday25Jun: {
    color: Color.colorDarkslateblue_100,
  },
  monday25JunContainer: {
    top: 168,
    fontSize: 14,
    width: 187,
    height: 11,
    letterSpacing: 0.1,
    position: "absolute",
    left: 11,
  },
  secondSemesterImportant: {
    marginLeft: -175.5,
    top: 1228,
    left: "50%",
    letterSpacing: 0.7,
    height: 31,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.sansationBold,
    fontWeight: "300",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  noteSummerTerm: {
    top: 1611,
    width: 358,
    height: 217,
    left: 15,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    left: 0,
    height: 59,
    width: 346,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  youCanComment: {
    top: 20,
    fontSize: FontSize.size_mid,
    width: 292,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0.2,
    left: 11,
  },
  rectangleParent: {
    top: 1937,
    left: 15,
  },
  comments: {
    left: 0,
    fontSize: FontSize.size_smi,
    letterSpacing: 0.1,
    position: "absolute",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.sansation,
  },
  groupItem: {
    height: 1,
    width: 314,
    position: "absolute",
  },
  groupInner: {
    width: 91,
  },
  rectangleGroup: {
    top: 17,
    left: 0,
  },
  commentsParent: {
    top: 2056,
    left: 40,
    height: 18,
    width: 314,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorGainsboro_100,
    left: 0,
    top: 0,
  },
  groupChild1: {
    width: 140,
  },
  rectangleContainer: {
    top: 187,
    left: 11,
  },
  leadCityUniversity: {
    fontSize: FontSize.size_2xl,
  },
  firstSemesterImportant: {
    fontFamily: FontFamily.sansationBold,
  },
  leadCityUniversityContainer: {
    top: 512,
    height: 101,
    width: 351,
    color: Color.colorDarkslateblue_100,
  },
  theManagementOf: {
    top: 404,
    width: 368,
    height: 114,
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  september25Resumption: {
    top: 613,
    width: 349,
    height: 564,
    left: 15,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  february19Resumption: {
    top: 1288,
    left: 15,
    width: 381,
    height: 323,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
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
  lcuConnect: {
    top: 19,
    left: 31,
    textAlign: "center",
    width: 98,
    height: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.2,
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
    top: 11,
    right: 40,
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
  image1Icon: {
    right: 180,
    bottom: 23,
    width: 24,
    top: 33,
  },
  post1: {
    flex: 1,
    height: 2374,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Post;
