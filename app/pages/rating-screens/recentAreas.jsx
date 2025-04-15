import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router"; // Use useRouter instead of useNavigation
import { Clock } from "lucide-react-native";

export default function RecentAreas() {
  const router = useRouter(); // Use router for navigation

  // Static values similar to those in home.jsx
  const name = "Bambang";
  const city = "Taguig";
  const date = "12-13-24";
  const time = "2 days ago";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent areas</Text>

      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>
          <Text style={{ fontWeight: "bold" }}>{name}</Text>, {city}
        </Text>
        <Image
          source={{
            uri: "https://via.placeholder.com/300x150.png?text=Map+Placeholder",
          }}
          style={styles.mapImage}
        />
        <Text style={styles.timeText}>You visited this area {time}</Text>
        <View style={styles.dateRow}>
          <Clock size={16} />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: "/rating-screens/area-review",
            params: { name, city, date, time },
          })
        }
      >
        <Text style={styles.buttonText}>Share your insights on this area</Text>
      </TouchableOpacity>
    </View>
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
  locationContainer: {
    marginBottom: 24,
  },
  locationText: {
    fontSize: 18,
    marginBottom: 8,
  },
  mapImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  timeText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#555",
  },
  button: {
    backgroundColor: "#ec4c73",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
