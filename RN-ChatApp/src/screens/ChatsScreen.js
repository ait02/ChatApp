import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatList from "../components/ChatList";

const ChatsScreen = () => {
  return (
    <View style={styles.background}>
      <ChatList />
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1A1A1C",
  },
});
