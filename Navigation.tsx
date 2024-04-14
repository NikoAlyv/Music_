import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/screens/Home.Screen";
import { FavoriteScreen } from "./src/screens/Favorite.Screen";
import { MusicScreen } from "./src/screens/Music.Screen";
import { colors } from "./src/theme/colors";
import HomeVector from "./assets/vectors/home.svg";
import MusicVector from "./assets/vectors/music.svg";
import LikeVector from "./assets/vectors/like.svg";
import LocationVector from "./assets/vectors/location.svg";
import LocationScreen from "./src/screens/Location.Screen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: "10%",
            backgroundColor: colors.dark,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <HomeVector color={focused ? colors.primary : colors.gray} />
            ),
          }}
        />
        <Tab.Screen
          name="Music"
          component={MusicScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MusicVector color={focused ? colors.primary : colors.gray} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <LikeVector color={focused ? colors.primary : colors.gray} />
            ),
          }}
        />
        <Tab.Screen
          name="Location"
          component={LocationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <LocationVector color={focused ? colors.primary : colors.gray} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
