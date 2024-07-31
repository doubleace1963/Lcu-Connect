import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CustomDrawerContent = (props) => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = await AsyncStorage.getItem('userData');
        if (user) {
          const userData = JSON.parse(user);
          setUserName(userData.name);
        } else {
          console.error('No user data found');
        }
      } catch (error) {
        console.error('Failed to load user data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require("../assets/profile-image.png")}
          style={styles.profileImage}
        />
        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text style={styles.userName}>{userName || 'User name'}</Text>
        )}
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: FontFamily.sansationBold,
  },
});

export default CustomDrawerContent;
