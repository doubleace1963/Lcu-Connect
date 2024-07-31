import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, Pressable, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const faculties = {
  "Faculty of Basic medical and applied Science": [
    "B.Sc. Public Health",
    "B. NSc. Nursing",
    "B.Sc. Microbiology",
    "B.Sc. Environmental Management & Toxicology",
    "B.MLS. Medical Laboratory Science",
    "B.Sc. Kinesiology & Sports Science",
    "B.Sc. Health Education",
    "B.Sc. Community Health",
    "B.Sc. Environmental Health Science",
    "B.Sc. Health Information Management",
    "B.Sc. Computer Science",
    "B.Sc. Computer and Information Science",
    "B.Sc. Computer Science with Economics",
    "B.Sc. Computer Science with Electronics",
    "B.Sc. Business Computing",
    "B.Sc. Information & Communication Technology",
    "B.Sc. Biochemistry",
    "B.Sc. Nutrition & Dietetics",
    "B.Sc. Biological Sciences",
    "B.Sc. Science Laboratory Technology",
    "B.Sc. Anatomy",
    "B.Sc. Physiology",
    "B.Sc. Chemistry",
    "B.Sc. Physics",
    "B.Sc. Biology",
    "B.Sc. Radiography",
    "B.Sc. Forensic Science",
  ],
  "Faculty of Law": ["Bachelor of Laws (LLB.)"],
  "Faculty of Environment, Social and management sciences": [
    "B.Sc. Mass Communication & Media Technology",
    "B. Sc. Politics & International Relations",
    "B.PA/B.Sc. Public Administration/Local Government Studies",
    "B.Sc. Politics & Law",
    "B.Sc. Psychology",
    "B.Sc. Sociology",
    "B.Sc. Social Work",
    "B.Sc. Criminology & Security Studies",
    "B.Sc. Economics",
    "B.Sc. Business Information Management",
    "B.Sc. Health Information Management",
    "B.Sc. Library & Information Management",
    "B.Sc. Office & Information Management",
    "B.Sc. Accounting",
    "B.Sc. Banking & Finance",
    "B.Sc. Business Administration",
    "B.Sc. Entrepreneurial Studies",
    "B.Sc. Industrial Relations & Personnel Management",
    "B.Sc. Marketing",
    "B.Sc. Estate Management",
    "B.Sc. Architecture",
  ],
  "Faculty of Arts and Education": [
    "B.LIS Library & Information Science",
    "B.A English & Literary Studies",
    "B.A. Performing Arts & Film Studies",
    "B.A (Ed.) English Language",
    "B.Ed. Social Studies",
    "B.Ed. Business Education",
    "B.Ed. Educational Administration",
    "B.Ed. Guidance & Counselling",
    "B.Sc. Ed. Physical and Health Education",
    "B.Sc. Health Education & Promotion",
    "B.Sc. Ed. Biology",
    "B.Sc. Ed. Chemistry",
    "B.Sc. Ed. Physics",
    "B.Sc. Ed. Mathematics",
    "B.Sc. Ed. Computer Science",
  ],
};

const levels = ["100L", "200L", "300L", "400L", "500L", "600L"];

const UserInformation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { matricNo } = route.params; // Get matricNo from route params

  const [name, setName] = useState("");
  const [level, setLevel] = useState(levels[0]);
  const [faculty, setFaculty] = useState(Object.keys(faculties)[0]);
  const [department, setDepartment] = useState(faculties[Object.keys(faculties)[0]][0]);
  const [email, setEmail] = useState(""); // Add email state

  useEffect(() => {
    // Retrieve email from AsyncStorage if available
    const getEmail = async () => {
      try {
        const user = await AsyncStorage.getItem('userData');
        if (user) {
          const userData = JSON.parse(user);
          setEmail(userData.email);
        }
      } catch (error) {
        console.error('Failed to load email', error);
      }
    };

    getEmail();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://192.168.141.91:80/lcu-connect-2/user_information.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matric_no: matricNo, // Include matricNo in the submission
          name: name,
          level: level,
          faculty: faculty,
          department: department,
        }),
      });

      const text = await response.text();
      console.log("Raw response text:", text);

      try {
        const data = JSON.parse(text);
        console.log("Parsed response data:", data);
        if (data.success) {
          // Save user data to AsyncStorage
          const userData = {
            matricNo,
            email,
            name,
            level,
            faculty,
            department,
          };
          await AsyncStorage.setItem('userData', JSON.stringify(userData));

          navigation.navigate("ProfilePage"); // Navigate to ProfilePage after successful submission
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Failed to parse JSON:", error);
        console.log("Response text:", text);
        alert("An error occurred while processing your request.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add more details</Text>
      <TextInput
        style={styles.input}
        placeholder="Matric No"
        value={matricNo}
        editable={false} // Make this field read-only
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        editable={false} // Make this field read-only
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={level}
          onValueChange={(itemValue) => setLevel(itemValue)}
          style={styles.picker}
        >
          {levels.map((lvl) => (
            <Picker.Item key={lvl} label={lvl} value={lvl} />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={faculty}
          onValueChange={(itemValue) => {
            setFaculty(itemValue);
            setDepartment(faculties[itemValue][0]); // Set default department
          }}
          style={styles.picker}
        >
          {Object.keys(faculties).map((fac) => (
            <Picker.Item key={fac} label={fac} value={fac} />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={department}
          onValueChange={(itemValue) => setDepartment(itemValue)}
          style={styles.picker}
          enabled={faculty !== ""}
        >
          {faculties[faculty].map((dept) => (
            <Picker.Item key={dept} label={dept} value={dept} />
          ))}
        </Picker>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.5 : 1.0 },
        ]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  title: {
    fontSize: 36,
    letterSpacing: 0.4,
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.sansationLight,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: Color.colorDarkslateblue_200,
    borderWidth: 1,
    borderRadius: Border.br_mini,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoMono,
  },
  pickerContainer: {
    height: 50,
    width: "100%",
    borderColor: Color.colorDarkslateblue_200,
    borderWidth: 1,
    borderRadius: Border.br_mini,
    marginVertical: 10,
    justifyContent: "center",
  },
  picker: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: Color.colorDarkslateblue_200,
    borderRadius: Border.br_31xl,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 20,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.sansationBold,
  },
});

export default UserInformation;
