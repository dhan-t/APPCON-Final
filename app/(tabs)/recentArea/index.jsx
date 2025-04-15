import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { CalendarClock, RotateCcw } from "lucide-react-native"; // Importing icons
import { useRouter } from "expo-router"; // Import router for navigation

// 🔧 Dynamic variables grouped here for easy backend integration
const useVariables = () => {
  return {
    recentAreas: [
      { name: "Makati City", date: "01-15-24" },
      { name: "Quezon City", date: "02-20-24" },
      { name: "Pasig City", date: "03-05-24" },
      { name: "Mandaluyong City", date: "04-10-24" },
      { name: "Taguig City", date: "05-25-24" },
      { name: "Manila City", date: "06-18-24" },
      { name: "Parañaque City", date: "07-12-24" },
      { name: "Las Piñas City", date: "08-08-24" },
      { name: "Pasay City", date: "09-30-24" },
      { name: "Caloocan City", date: "10-22-24" },
      { name: "Valenzuela City", date: "11-14-24" },
      { name: "Marikina City", date: "12-05-24" },
      { name: "San Juan City", date: "12-20-24" },
      { name: "Navotas City", date: "01-03-25" },
      { name: "Malabon City", date: "01-18-25" },
    ],
  };
};

export default function RecentArea() {
  const { recentAreas } = useVariables();
  const router = useRouter(); // Initialize router for navigation

  const scrollY = useRef(new Animated.Value(0)).current; // Animated value for scroll position

  // Interpolations for header size and position
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 60], // Header height shrinks from 100 to 60
    extrapolate: "clamp",
  });

  const headerFontSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [35, 20], // Font size shrinks from 28 to 20
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
          Recent areas
        </Animated.Text>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingTop: 100, paddingBottom: 40 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {recentAreas.map((area, index) => (
          <View key={index} style={styles.areaRow}>
            {/* Left Section: Icon and Area Info */}
            <View style={styles.areaInfo}>
              <View style={styles.areaHeader}>
                <RotateCcw size={24} style={styles.icon} />

                <View style={styles.cityDate}>
                  <Text style={styles.areaName}>{area.name}</Text>
                  <View style={styles.dateRow}>
                    <CalendarClock size={16} style={styles.dateIcon} />
                    <Text style={styles.dateText}>{area.date}</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* Right Section: Review Button */}
            <TouchableOpacity
              style={styles.reviewButton}
              onPress={() => router.navigate("/recentArea/areaReview")} // Navigate to areaReview
            >
              <Text style={styles.reviewButtonText}>Review</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  areaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    marginHorizontal: 16,
  },
  areaInfo: {
    flex: 1,
    marginRight: 12, // Adds spacing between the info and the button
  },
  areaHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    marginRight: 8,
    color: "#555", // Icon color
  },
  areaName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e1e1e",
    flexShrink: 1,
    width: "100%", // Ensures the text doesn't overflow
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  dateIcon: {
    color: "#555",
  },
  dateText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#555",
  },
  reviewButton: {
    backgroundColor: "#ec4c73",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  reviewButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
