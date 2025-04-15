import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MapPin, Clock, ArrowRight } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const locationSettings = [
    { name: "Enable location access", route: "LocationAccessSettings" },
    { name: "Cache location", route: "CacheLocationSettings" },
  ];

  const privacySettings = [
    {
      name: "Location privacy",
      route: "LocationPrivacySettings",
      icon: <MapPin size={18} color="#000" />,
    },
    {
      name: "Information privacy",
      route: "InformationPrivacySettings",
      icon: <Clock size={18} color="#000" />,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>App settings</Text>

      {/* Profile Card */}
      <TouchableOpacity style={styles.profileCard}>
        <View style={styles.avatar} />
        <Text style={styles.profileName}>Olivia Smith</Text>
        <ArrowRight size={20} color="#888" />
      </TouchableOpacity>

      {/* Panic Pin */}
      <View style={styles.panicCard}>
        <LinearGradient
          colors={["#d47b8b", "#ecafc8"]}
          style={styles.panicCircle}
        />
        <Text style={styles.panicText}>Panic Pin ID</Text>
      </View>

      {/* Location Access */}
      <Text style={styles.sectionTitle}>Location access</Text>
      {locationSettings.map((setting, index) => (
        <TouchableOpacity
          key={index}
          style={styles.settingItem}
          onPress={() => navigation.navigate(setting.route)}
        >
          <View style={styles.iconBox}>
            <MapPin size={18} color="#000" />
          </View>
          <Text style={styles.settingText}>{setting.name}</Text>
        </TouchableOpacity>
      ))}

      {/* App Privacy */}
      <Text style={styles.sectionTitle}>App privacy</Text>
      {privacySettings.map((setting, index) => (
        <TouchableOpacity
          key={index}
          style={styles.settingItem}
          onPress={() => navigation.navigate(setting.route)}
        >
          <View style={styles.iconBox}>{setting.icon}</View>
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#ccc",
    marginRight: 12,
  },
  profileName: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
  panicCard: {
    backgroundColor: "#f3f3f3",
    borderRadius: 16,
    paddingVertical: 24,
    alignItems: "center",
    marginBottom: 24,
  },
  panicCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "linear-gradient(135deg, #d47b8b, #ecafc8)", // won't show in RN, you can use expo-linear-gradient
    backgroundColor: "#ecafc8",
    marginBottom: 8,
  },
  panicText: {
    fontSize: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 8,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#fbdede",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  settingText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
