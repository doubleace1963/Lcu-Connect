import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import SignUpPage from './screens/SignUpPage';
import LoginPage from './screens/LoginPage';
import LandingPage from './screens/LandingPage';
import HomePage from './screens/HomePage';
import ProfilePage from './screens/ProfilePage';
import SearchPage from './screens/SearchPage';
import UserInformation from './screens/UserInformation';
import Post from './screens/Post';
import post1 from './screens/post1';
import Post2 from './screens/Post2';
import Post3 from './screens/Post3';
import ResetPasswordPage from './screens/ResetPasswordPage';
import UpdateProfilePage from './screens/UpdateProfilePage';
import CustomDrawerContent from './screens/CustomDrawerContent';  // Ensure this import is correct

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Sansation-Light': require('./assets/fonts/Sansation_Light.ttf'),
    'Sansation-Regular': require('./assets/fonts/Sansation_Regular.ttf'),
    'Sansation-Bold': require('./assets/fonts/Sansation_Bold.ttf'),
  });
};

const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LandingPage">
    <Stack.Screen name="LandingPage" component={LandingPage} />
    <Stack.Screen name="SignUpPage" component={SignUpPage} />
    <Stack.Screen name="LoginPage" component={LoginPage} />
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="ProfilePage" component={ProfilePage} />
    <Stack.Screen name="UserInformation" component={UserInformation} />
    <Stack.Screen name="Post" component={Post} />
    <Stack.Screen name="post1" component={post1} />
    <Stack.Screen name="Post2" component={Post2} />
    <Stack.Screen name="Post3" component={Post3} />
    <Stack.Screen name="SearchPage" component={SearchPage} />
    <Stack.Screen name="ResetPasswordPage" component={ResetPasswordPage} />
    <Stack.Screen name="UpdateProfilePage" component={UpdateProfilePage} />
  </Stack.Navigator>
);

const App = () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} />} 
        screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="AppStack" component={AppStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
