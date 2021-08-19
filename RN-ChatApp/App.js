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
import { SafeAreaView } from "react-native-safe-area-context";
import ChatScreen from "./src/screens/ChatScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ChatsScreen}
        name="Chats"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={ChatScreen}
        name="Chat"
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: ({ route }) => (
            <View
              style={{
                height: Platform.OS === "ios" ? "auto" : 100,
                backgroundColor: "#242935",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SafeAreaView style={{ backgroundColor: "#242935" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingTop: 10,
                  }}
                >
                  {route.name !== "ChatsStack" ? route.name : "Chats"}
                </Text>
              </SafeAreaView>
            </View>
          ),
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
