import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { CalendarClock, Info, ArrowLeft } from "lucide-react-native";
import LeafletMapView from "../../../components/LeafletMapView";

export default function AreaReview() {
  const router = useRouter(); // For navigation

  const scrollY = useRef(new Animated.Value(0)).current; // Animated value for scroll position

  const [ratings, setRatings] = useState({
    safety: 0,
    lighting: 0,
    security: 0,
  });
  const [comments, setComments] = useState("");

  // Interpolations for header size and position
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 60], // Header height shrinks from 100 to 60
    extrapolate: "clamp",
  });

  const headerFontSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [30, 20], // Font size shrinks from 35 to 20
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

  const handleRatingChange = (category, value) => {
    setRatings((prevRatings) => ({ ...prevRatings, [category]: value }));
  };

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
            borderBottomColor: headerBorderColor,
            borderColor: "transparent",
          },
        ]}
      >
        <View style={styles.headerContent}>
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
          {/* Title */}
          <Animated.Text
            style={[styles.headerTitle, { fontSize: headerFontSize }]}
          >
            Area Review
          </Animated.Text>
        </View>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 100, // Increased padding at the top to avoid overlap with the header
          paddingBottom: 40, // Added padding at the bottom for extra space
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Map Section */}
        <Text style={styles.subtitle}>Rate the area</Text>
        <View style={styles.mapWrapper}>
          <LeafletMapView lat={14.525747} lon={121.072914} />
        </View>

        <View style={styles.locDateContainer}>
          <Text style={styles.locationText}>
            <Text style={{ fontWeight: "bold" }}>Bambang</Text>, Taguig
          </Text>
          <View style={styles.dateRow}>
            <CalendarClock size={16} style={styles.dateIcon} />
            <Text style={styles.dateText}>12-13-24</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <TouchableOpacity
            onPress={() => {
              /* Add your function here */
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Info size={16} color="#555" />
              <Text style={styles.infoText}>What’s this for?</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Rating Section */}
        <Text style={styles.sectionTitle}>
          Share Your Insights on This Area
        </Text>
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
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
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
  locDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
  dateIcon: {
    color: "#555",
  },
  infoRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center", // Centers content horizontally
    alignItems: "center", // Centers content vertically
    marginBottom: 32,
    marginTop: 16,
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
    backgroundColor: "white",
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
    backgroundColor: "white",
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
