import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const UpdateProfilePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.updateProfilePage}>
      <View style={[styles.updateProfileParent, styles.groupParentLayout]}>
        <View style={styles.updateProfile}>
          <View style={[styles.updateProfileChild, styles.childBorder]} />
        </View>
        <Text style={[styles.name, styles.nameLayout]}>Name</Text>
      </View>
      <View style={[styles.updateProfileGroup, styles.groupParentLayout]}>
        <View style={styles.updateProfile}>
          <View style={[styles.updateProfileChild, styles.childBorder]} />
        </View>
        <Text style={[styles.email, styles.nameLayout]}>Email</Text>
      </View>
      <View style={[styles.updateProfileContainer, styles.groupParentLayout]}>
        <View style={styles.updateProfile}>
          <View style={[styles.updateProfileChild, styles.childBorder]} />
        </View>
        <Text style={[styles.matricNo, styles.levelTypo]}>Matric No</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={styles.updateProfile}>
          <View style={[styles.updateProfileChild, styles.childBorder]} />
        </View>
        <Text style={[styles.level, styles.levelTypo]}>Level</Text>
      </View>
      <View style={[styles.updateProfileParent1, styles.groupParentLayout]}>
        <View style={styles.updateProfile}>
          <View style={[styles.updateProfileChild, styles.childBorder]} />
        </View>
        <Text style={[styles.department, styles.levelTypo]}>Department</Text>
      </View>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("ProfilePage")}
      >
        <Text style={[styles.back1, styles.nameTypo]}>Back</Text>
      </Pressable>
      <Text style={[styles.updateProfileWarningContainer, styles.back1FlexBox]}>
        <Text style={styles.updateProfileWarningContainer1}>
          <Text style={styles.updateProfile5}>
            <Text style={styles.updateProfile6}>{`Update Profile
`}</Text>
          </Text>
          <Text style={styles.warningYourProfileCannotB}>
            <Text style={styles.updateProfile5}> </Text>
            <Text
              style={styles.warningYourProfile}
            >{`WARNING. Your profile cannot be updated after you are validated.
Ensure you Enter correct Information.`}</Text>
          </Text>
        </Text>
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.submit, styles.nameLayout]}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 50,
    width: 290,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorDarkslateblue_200,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  nameLayout: {
    height: 27,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  levelTypo: {
    left: 15,
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    top: 11,
    position: "absolute",
  },
  nameTypo: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  back1FlexBox: {
    alignItems: "center",
    display: "flex",
  },
  groupChildLayout: {
    height: 60,
    width: 231,
    position: "absolute",
  },
  updateProfileChild: {
    height: 50,
    width: 290,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  updateProfile: {
    left: 0,
    top: 0,
    height: 50,
    width: 290,
    position: "absolute",
  },
  name: {
    left: 10,
    width: 54,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    color: Color.colorDarkslateblue_100,
    top: 11,
    height: 27,
  },
  updateProfileParent: {
    top: 193,
    left: 56,
    width: 290,
  },
  email: {
    left: 7,
    width: 52,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
    color: Color.colorDarkslateblue_100,
    top: 11,
    height: 27,
  },
  updateProfileGroup: {
    top: 276,
    left: 56,
    width: 290,
  },
  matricNo: {
    width: 72,
  },
  updateProfileContainer: {
    top: 359,
    left: 56,
    width: 290,
  },
  level: {
    width: 41,
  },
  groupView: {
    top: 442,
    left: 56,
    width: 290,
  },
  department: {
    width: 95,
  },
  updateProfileParent1: {
    top: 525,
    left: 56,
    width: 290,
  },
  back1: {
    color: Color.colorDarkslateblue_200,
    width: 49,
    height: 40,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
  },
  back: {
    left: 22,
    top: 33,
    position: "absolute",
  },
  updateProfile6: {
    fontFamily: FontFamily.sansation,
  },
  updateProfile5: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.2,
  },
  warningYourProfile: {
    letterSpacing: 0.3,
    fontSize: FontSize.size_base,
  },
  warningYourProfileCannotB: {
    fontFamily: FontFamily.sansationLight,
    fontWeight: "300",
  },
  updateProfileWarningContainer1: {
    width: "100%",
  },
  updateProfileWarningContainer: {
    top: 60,
    left: 36,
    width: 329,
    height: 140,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorDarkslateblue_200,
    borderWidth: 1,
    borderColor: Color.colorDarkslateblue_200,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  submit: {
    top: 16,
    left: 84,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "left",
    width: 63,
    fontFamily: FontFamily.sansation,
  },
  rectangleParent: {
    top: 626,
    left: 82,
  },
  updateProfilePage: {
    flex: 1,
    height: 767,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default UpdateProfilePage;

