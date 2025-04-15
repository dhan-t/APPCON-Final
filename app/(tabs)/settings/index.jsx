import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  User,
  Circle,
  Moon,
  TextCursorInput,
  Map,
  MapPin,
  Bell,
  Info,
} from "lucide-react-native";
import { useRouter } from "expo-router"; // Use router for navigation

export default function Settings() {
  const router = useRouter(); // Initialize router

  const sections = [
    {
      title: "Personal",
      items: [
        {
          name: "Account setting",
          icon: <User size={18} color="#000" />,
          path: "/profile/personal-details?source=settings", // Add source parameter
        },
        {
          name: "PanicPin information",
          icon: <Circle size={18} color="#000" />,
          path: "/profile/iot-information?source=settings", // Add source parameter
        },
      ],
    },
    {
      title: "Appearance",
      items: [
        {
          name: "Theme",
          icon: <Moon size={18} color="#000" />,
          path: "/settings/theme", // Full path to the screen
        },
        {
          name: "Text size",
          icon: <TextCursorInput size={18} color="#000" />,
          path: "/settings/textSize", // Full path to the screen
        },
        {
          name: "Map style",
          icon: <Map size={18} color="#000" />,
          path: "/settings/mapStyle", // Full path to the screen
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          name: "Location",
          icon: <MapPin size={18} color="#000" />,
          path: "/settings/location", // Full path to the screen
        },
        {
          name: "Notifications",
          icon: <Bell size={18} color="#000" />,
          path: "/settings/notifications", // Placeholder for future page
        },
        {
          name: "PanicPin configuration",
          icon: <Circle size={18} color="#000" />,
          path: "/settings/panicpinConfigure", // Full path to the screen
        },
        {
          name: "About app",
          icon: <Info size={18} color="#000" />,
          path: "/settings/about", // Full path to the screen
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>App settings</Text>

      {sections.map((section, sectionIndex) => (
        <View key={sectionIndex}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.items.map((item, itemIndex) => (
            <TouchableOpacity
              key={itemIndex}
              style={styles.settingItem}
              onPress={() => router.navigate(item.path)} // Navigate using the full path
            >
              <View style={styles.iconBox}>{item.icon}</View>
              <Text style={styles.settingText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 16,
    color: "#000",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 12,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#fbdede", // Light pink background for the icon
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  settingText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
});
