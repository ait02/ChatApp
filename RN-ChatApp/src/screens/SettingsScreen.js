import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.background}>
      <Text>Settings</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
