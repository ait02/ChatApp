import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

const ChatsHeader = ({ route }) => {
  return (
    <View
      style={{
        height: Platform.OS === "ios" ? 110 : 80,
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
            paddingTop: 20,
          }}
        >
          {route.name !== "ChatsStack" ? route.name : "Chats"}
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default ChatsHeader;
