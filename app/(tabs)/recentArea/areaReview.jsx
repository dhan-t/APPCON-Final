import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Clock, Info } from "lucide-react-native";
import LeafletMapView from "../../../components/LeafletMapView";

export default function AreaReview() {
  // Static values similar to recentAreas.jsx
  const name = "Bambang";
  const city = "Taguig";
  const date = "12-13-24";
  const lat = 14.1792; // Latitude for the map
  const lon = 121.3658; // Longitude for the map

  const [ratings, setRatings] = useState({
    safety: 0,
    lighting: 0,
    security: 0,
  });
  const [comments, setComments] = useState("");

  const handleRatingChange = (category, value) => {
    setRatings((prevRatings) => ({ ...prevRatings, [category]: value }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Area review</Text>

      {/* Map Section */}
      <Text style={styles.subtitle}>Rate the area</Text>
      <View style={styles.mapWrapper}>
        <LeafletMapView lat={lat} lon={lon} />
      </View>

      {/* Location Details */}
      <Text style={styles.locationText}>
        <Text style={{ fontWeight: "bold" }}>{name}</Text>, {city}
      </Text>
      <View style={styles.dateRow}>
        <Clock size={16} />
        <Text style={styles.dateText}>{date}</Text>
      </View>

      {/* Info Section */}
      <View style={styles.infoRow}>
        <Info size={16} color="#555" />
        <Text style={styles.infoText}>What’s this for?</Text>
      </View>

      {/* Rating Section */}
      <Text style={styles.sectionTitle}>Share Your Insights on This Area</Text>
      {["safety", "lighting", "security"].map((category, index) => (
        <View key={index} style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>
            {category === "safety"
              ? "How safe I felt:"
              : category === "lighting"
              ? "Lighting conditions of area:"
              : "Presence of Security Measures:"}
          </Text>
          <View style={styles.ratingRow}>
            {[1, 2, 3, 4, 5].map((value) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.radioButton,
                  ratings[category] === value && styles.radioButtonSelected,
                ]}
                onPress={() => handleRatingChange(category, value)}
              >
                <Text
                  style={[
                    styles.radioText,
                    ratings[category] === value && styles.radioTextSelected,
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      {/* Comments Section */}
      <View style={styles.commentContainer}>
        <Text style={styles.commentTitle}>Comments:</Text>
        <TextInput
          style={styles.commentInput}
          placeholder="Share your thoughts..."
          value={comments}
          onChangeText={setComments}
          multiline
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit response</Text>
      </TouchableOpacity>
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
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  mapWrapper: {
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 12,
  },
  locationText: {
    fontSize: 18,
    marginBottom: 8,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  dateText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#555",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#555",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  ratingContainer: {
    marginBottom: 16,
    backgroundColor: "#ffe4e9",
    padding: 12,
    borderRadius: 8,
  },
  ratingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonSelected: {
    backgroundColor: "#ec4c73",
  },
  radioText: {
    fontSize: 14,
    color: "#555",
  },
  radioTextSelected: {
    color: "white",
  },
  commentContainer: {
    marginTop: 20,
    backgroundColor: "#ffe4e9",
    padding: 12,
    borderRadius: 8,
  },
  commentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  commentInput: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    height: 80,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#ec4c73",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
