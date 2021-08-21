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
import ChatHeader from "./src/components/ChatHeader";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const StackSettings = createStackNavigator();

const ChatStack = ({ navigation, route }) => {
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

const TabScreens = ({ route, navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
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
        name="Chats"
        component={ChatsScreen}
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
          tabBarVisible: false,
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
  );
};

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator
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
            tabBarVisible: false,
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
      </Tab.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen
          name="TabScreen"
          component={TabScreens}
          options={({ route }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route, navigation }) => ({
            header: () => <ChatHeader route={route} navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
