import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ChatMap = ({ item, firstItem }) => {
  return (
    <View
      style={[
        item === firstItem
          ? { borderBottomWidth: 0 }
          : { borderBottomWidth: 1 },
        { borderColor: "#A1A1A3" },
      ]}
    >
      <TouchableOpacity>
        <View style={[styles.container]}>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: item.image_url,
              }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.chatContainer}>
            <Text style={styles.chatContainerName}>{item.name}</Text>
            <Text style={styles.chatContainerChats}>Message</Text>
          </View>
          <View style={styles.arrowContainer}>
            <MaterialIcons
              name="arrow-forward-ios"
              size={16}
              color={"#A1A1A3"}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatMap;

const styles = StyleSheet.create({
  container: {
    // borderTopWidth: 1,
    // borderColor: "#A1A1A3",
    height: 90,
    display: "flex",
    flexDirection: "row",
  },
  profileContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "20%",
  },
  profileImage: {
    height: 60,
    width: 60,
    resizeMode: "cover",
    borderRadius: 35,
  },
  chatContainer: { marginTop: 10, width: "65%" },
  chatContainerName: { color: "#FFF", fontWeight: "bold", fontSize: 18 },
  chatContainerChats: { color: "#A1A1A3", fontSize: 16 },
  arrowContainer: { marginTop: 10, width: "10%", marginTop: 35 },
});
