import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Editable variables
const appName = "MyApp";
const version = "1.0.0";
const description = "This app helps users manage their settings efficiently.";
const developer = "Your Company Name";

export default function AboutApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About App</Text>
      <Text style={styles.text}>
        <Text style={styles.label}>App Name: </Text>
        {appName}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Version: </Text>
        {version}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Description: </Text>
        {description}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Developer: </Text>
        {developer}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
  label: {
    fontWeight: "bold",
  },
});
