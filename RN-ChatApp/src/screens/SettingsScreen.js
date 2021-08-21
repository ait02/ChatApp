import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.settingsHeader}>
        <Text style={styles.title}>Settings</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  settingsHeader: {
    backgroundColor: "#242935",
    paddingHorizontal: 20,
    height: Platform.OS === "ios" ? 110 : 80,
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
});
