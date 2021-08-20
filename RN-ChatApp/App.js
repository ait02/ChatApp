import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import ChatsScreen from "./src/screens/ChatsScreen";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "./src/screens/SettingsScreen";
import IonIcons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ChatScreen from "./src/screens/ChatScreen";
import ChatsHeader from "./src/components/ChatsHeader";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ChatsScreen}
        name="Chats"
        options={{
          headerShown: true,
          header: ({ route }) => <ChatsHeader route={route} />,
        }}
      />
      <Stack.Screen
        component={ChatScreen}
        name="Chat"
        options={({ route }) => ({
          title: route.params.name,
          // header: () => <ChatsHeader route={route} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#242935",
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#A1A1A3",
        }}
      >
        <Tab.Screen
          name="ChatsStack"
          component={ChatStack}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <View>
                <IonIcons
                  name="chatbubble-ellipses"
                  size={28}
                  color={focused ? "#fff" : "#A1A1A3"}
                />
              </View>
            ),
            title: "Chats",
          })}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <FontAwesome
                  name="gears"
                  size={28}
                  color={focused ? "#fff" : "#A1A1A3"}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
