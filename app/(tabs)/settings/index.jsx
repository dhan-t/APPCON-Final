import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
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

  const scrollY = useRef(new Animated.Value(0)).current; // Animated value for scroll position

  // Interpolations for header size and position
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 60], // Header height shrinks from 100 to 60
    extrapolate: "clamp",
  });

  const headerFontSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [35, 20], // Font size shrinks from 35 to 20
    extrapolate: "clamp",
  });

  const headerPadding = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [25, 10], // Padding reduces as the header shrinks
    extrapolate: "clamp",
  });

  const headerBorderColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ["transparent", "#ddd"], // Transparent when expanded, gray when collapsed
    extrapolate: "clamp",
  });

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
    <View style={styles.container}>
      {/* Animated Header */}
      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
            paddingHorizontal: 16,
            paddingBottom: headerPadding,
            borderBottomColor: headerBorderColor, // Dynamically set border color
            borderColor: "transparent",
          },
        ]}
      >
        <Animated.Text
          style={[styles.headerTitle, { fontSize: headerFontSize }]}
        >
          Settings
        </Animated.Text>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingTop: 100,
          paddingBottom: 40,
          paddingLeft: 16,
          paddingRight: 16,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
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
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 10,
    justifyContent: "flex-end", // Align title to the bottom of the header
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
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
    borderRadius: 100,
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
