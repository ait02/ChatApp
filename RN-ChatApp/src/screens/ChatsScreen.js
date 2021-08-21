import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatList from "../components/ChatList";
import ChatsHeader from "../components/ChatsHeader";

const ChatsScreen = ({ navigation, route }) => {
  return (
    <>
      <ChatsHeader route={route} />
      <View style={styles.background}>
        <ChatList navigation={navigation} />
      </View>
    </>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1A1A1C",
  },
});
