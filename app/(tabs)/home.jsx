import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import LeafletMapView from "../../components/LeafletMapView";
import { ChevronRight, Clock } from "lucide-react-native";

const useVariables = () => {
  return {
    lat: 14.525747,
    lon: 121.072914,
    locationName: "Bambang",
    city: "Taguig",
    date: "12-13-24",
    distressSent: false,
    etaMinutes: 20,
    mapRegion: {
      latitude: 14.6091,
      longitude: 121.0223,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    hotspots: [
      { name: "Bambang", reports: 10 },
      { name: "Mariano Ave", reports: 10 },
      { name: "Garden of Memories", reports: 10 },
    ],
  };
};

export default function HomeScreen() {
  const {
    lon,
    lat,
    locationName,
    city,
    date,
    distressSent,
    etaMinutes,
    hotspots,
  } = useVariables();

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
          Home
        </Animated.Text>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingTop: 100,
          paddingBottom: 40,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.locationRow}>
          <Text style={styles.locationText}>
            <Text style={{ fontWeight: "bold" }}>{locationName}</Text>, {city}
          </Text>
          <View style={styles.dateContainer}>
            <Clock size={16} />
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>

        {distressSent && (
          <View style={styles.distressBox}>
            <Text style={styles.distressText}>Distress signal sent!</Text>
            <Text style={styles.etaText}>ETA: {etaMinutes} Minutes</Text>
            <View style={styles.progressBarBackground}>
              <View
                style={[
                  styles.progressBar,
                  { width: `${(30 - etaMinutes) * 5}%` },
                ]}
              />
            </View>
            <View style={styles.progressTimeRow}>
              <Text style={styles.progressTime}>3:33 PM</Text>
              <Text style={styles.progressTime}>3:53 PM</Text>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.panicID}>🟢 PanicPin ID</Text>
        </View>

        <View style={styles.mapWrapper}>
          <LeafletMapView lat={lat} lon={lon} />
        </View>

        <TouchableOpacity style={styles.cacheButton}>
          <Text style={styles.cacheButtonText}>📍 Cache location</Text>
        </TouchableOpacity>

        <View style={styles.hotspotContainer}>
          <Text style={styles.sectionTitle}>Nearby distress hotspots</Text>
          {hotspots.map((item, index) => (
            <View key={index} style={styles.hotspotRow}>
              <Text style={styles.hotspotText}>{item.name}</Text>
              <Text style={styles.hotspotBadge}>{item.reports}</Text>
            </View>
          ))}
        </View>
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
  headerTitle: {
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    paddingHorizontal: 16,
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
  distressBox: {
    backgroundColor: "#82003c",
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
    marginHorizontal: 16,
  },
  distressText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  etaText: {
    color: "white",
    fontSize: 16,
    marginTop: 4,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: "white",
    borderRadius: 6,
    marginTop: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#ff99cc",
    borderRadius: 6,
  },
  progressTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  progressTime: {
    color: "white",
    fontSize: 10,
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  panicID: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 6,
    fontWeight: "bold",
  },
  cacheButton: {
    backgroundColor: "#ec4c73",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 16,
  },
  cacheButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  hotspotContainer: {
    marginTop: 24,
    backgroundColor: "#82003c",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  sectionTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  hotspotRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  hotspotText: {
    fontWeight: "bold",
  },
  hotspotBadge: {
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 12,
  },
  mapWrapper: {
    height: 200,
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 12,
  },
});
