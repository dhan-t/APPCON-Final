import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const settings = [
    { name: "Enable location access", route: "LocationAccessSettings" },
    { name: "Cache location", route: "CacheLocationSettings" },
    { name: "Location privacy", route: "LocationPrivacySettings" },
    { name: "Information privacy", route: "InformationPrivacySettings" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>App settings</Text>

      <View style={styles.profileContainer}>
        <View style={styles.profilePic} />
        <Text style={styles.profileName}>Olivia Smith</Text>
      </View>

      <View style={styles.panicPinContainer}>
        <Text style={styles.panicPinText}>Panic Pin ID</Text>
      </View>

      <Text style={styles.sectionTitle}>Location access</Text>
      {settings.slice(0, 2).map((setting, index) => (
        <TouchableOpacity
          key={index}
          style={styles.settingItem}
          onPress={() => navigation.navigate(setting.route)}
        >
          <Text style={styles.settingText}>{setting.name}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>App privacy</Text>
      {settings.slice(2).map((setting, index) => (
        <TouchableOpacity
          key={index}
          style={styles.settingItem}
          onPress={() => navigation.navigate(setting.route)}
        >
          <Text style={styles.settingText}>{setting.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
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
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
  },
  panicPinContainer: {
    backgroundColor: "#f1f1f1",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  panicPinText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  settingItem: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },
  settingText: {
    fontSize: 16,
  },
});
