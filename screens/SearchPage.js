import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";

const SearchPage = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState("");
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  const posts = [
    {
      id: 1,
      title: "2023/2024 Session Timeline. Breakdown of all the Activities.",
      date: "Thursday, 25 Jun 2023",
    },
    {
      id: 2,
      title: "Lead City announces 20th Matriculation Ceremony.",
      date: "Friday, 26 Jun 2023",
    },
    {
      id: 3,
      title: "Lead City University Approved Dress Code.",
      date: "Friday, 25 Jan 2024",
    },
    {
      id: 4,
      title: "Lead City University 16th Convocation Ceremony.",
      date: "Friday, 1 Dec 2023",
    },
  ];

  const handleSearch = () => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  React.useEffect(() => {
    handleSearch();
  }, [searchText]);

  const handlePostPress = (postId) => {
    if (postId === 1) {
      navigation.navigate("Post");
    } else if (postId == 2) {
      navigation.navigate("post1");
    } else if (postId == 3) {
      navigation.navigate("Post2");
    }  else if (postId == 4) {
      navigation.navigate("Post3");
    }

      
    
  };

  return (
    <View style={styles.searchPage}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <TextInput
          style={[styles.searchInput, styles.image4IconLayout]}
          placeholder="Find specific post"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Pressable onPress={handleSearch}>
          <Image
            style={[styles.image4Icon, styles.image4IconLayout]}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Icon
          name="arrow-back"
          size={24}
          color={Color.colorDarkslateblue_200}
        />
      </Pressable>
      <ScrollView style={styles.resultsContainer}>
        {searchText && filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <Pressable key={post.id} style={styles.post} onPress={() => handlePostPress(post.id)}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postDate}>{post.date}</Text>
            </Pressable>
          ))
        ) : (
          searchText && <Text style={styles.noResults}>No results found</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 48,
    width: 254,
    position: "absolute",
  },
  image4IconLayout: {
    height: 27,
    position: "absolute",
    
    
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue_200,
    borderWidth: 1,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  searchInput: {
    left: 10,
    top: 9,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.sansationLight,
  },
  image4Icon: {
    top: 11,
    left: 220,
    width: 27,
  },
  rectangleParent: {
    top: 45,
    left: 81,
  },
  back: {
    top: 58,
    left: 10,
    position: "absolute",
  },
  resultsContainer: {
    marginTop: 100,
    paddingHorizontal: 16,
  },
  post: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Color.colorDarkslateblue_200,
  },
  postTitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sansation,
    color: Color.colorDarkslateblue_200,
  },
  postDate: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sansationLight,
    color: Color.colorGray,
    marginTop: 4,
  },
  noResults: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sansation,
    color: Color.colorDarkslateblue_200,
    textAlign: "center",
    marginTop: 16,
  },
  searchPage: {
    flex: 1,
    width: "100%",
    height: 685,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default SearchPage;
