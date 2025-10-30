import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First App Created</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
});
