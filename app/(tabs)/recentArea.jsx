import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Clock, RotateCcw } from "lucide-react-native"; // Importing icons

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

export default function RecentAreas() {
  const { recentAreas } = useVariables();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recent areas</Text>

      {recentAreas.map((area, index) => (
        <View key={index} style={styles.areaRow}>
          {/* Left Section: Icon and Area Info */}
          <View style={styles.areaInfo}>
            <View style={styles.areaHeader}>
              <RotateCcw size={24} style={styles.icon} />

              <View style={styles.cityDate}>
                <Text style={styles.areaName}>{area.name}</Text>
                <View style={styles.dateRow}>
                  <Clock size={16} style={styles.dateIcon} />
                  <Text style={styles.dateText}>{area.date}</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Right Section: Share Insights Button */}
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Review</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  areaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
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
    width: "99%", // Ensures the text doesn't overflow
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
  shareButton: {
    backgroundColor: "#ec4c73",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  shareButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
