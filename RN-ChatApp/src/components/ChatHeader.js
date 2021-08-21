import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ChatHeader = ({ route, navigation }) => {
  return (
    <View
      style={{
        height: Platform.OS === "ios" ? 100 : 80,
        paddingTop: Platform.OS === "ios" ? 0 : 20,
        backgroundColor: "#242935",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
      }}
    >
      <SafeAreaView
        style={{
          backgroundColor: "#242935",
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color={"#fff"} />
        </TouchableOpacity>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            right: 0,
          }}
        >
          {route.params.name}
        </Text>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: route.params.image_url }}
            style={styles.profileImage}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
  },
  profileImage: {
    height: 44,
    width: 44,
    resizeMode: "cover",
    borderRadius: 35,
  },
});

export default ChatHeader;
