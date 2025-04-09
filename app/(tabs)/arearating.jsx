import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MapView from "react-native-maps";
import { Clock } from "lucide-react-native";

// 🔧 Dynamic variables grouped here for easy debugging
const useVariables = () => {
  return {
    lat: 14.1792,
    lon: 121.3658,
    locationName: "Bambang",
    city: "Taguig",
    date: "12-13-24",
  };
};

export default function AreaReviewScreen() {
  const { lat, lon, locationName, city, date } = useVariables();
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

      <Text style={styles.subtitle}>Rate the area</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />

      <View style={styles.locationRow}>
        <Text style={styles.locationText}>
          <Text style={{ fontWeight: "bold" }}>{locationName}</Text>, {city}
        </Text>
        <View style={styles.dateContainer}>
          <Clock size={16} />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoText}>What's this for?</Text>
      </View>

      <Text style={styles.sectionTitle}>Share Your Insights on This Area</Text>

      {[
        "How safe I felt",
        "Lighting conditions of area",
        "Presence of Security Measures",
      ].map((category, index) => (
        <View key={index} style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>{category}:</Text>
          <View style={styles.ratingRow}>
            {[1, 2, 3, 4, 5].map((value) => (
              <TouchableOpacity
                key={value}
                style={styles.radioButton}
                onPress={() =>
                  handleRatingChange(
                    category.toLowerCase().replace(/ /g, ""),
                    value
                  )
                }
              >
                <Text style={styles.radioText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

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

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit response</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
  map: {
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 16,
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  locationText: {
    fontSize: 16,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    marginLeft: 4,
    fontSize: 14,
  },
  infoRow: {
    marginTop: 10,
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    color: "#555",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  ratingContainer: {
    backgroundColor: "#ffe6e6",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  ratingTitle: {
    fontWeight: "bold",
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  radioButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  radioText: {
    fontSize: 14,
  },
  commentContainer: {
    backgroundColor: "#ffe6e6",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  commentTitle: {
    fontWeight: "bold",
  },
  commentInput: {
    marginTop: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    height: 80,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#ff6699",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
