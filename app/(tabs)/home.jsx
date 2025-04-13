import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import LeafletMapView from "../../components/LeafletMapView";
import { ChevronRight, Clock } from "lucide-react-native";

// 🔧 Dynamic variables grouped here for easy debugging
const useVariables = () => {
  return {
    lat: 14.1792,
    lon: 121.3658,
    locationName: "Bambang",
    city: "Taguig",
    date: "12-13-24",
    distressSent: true,
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
    recentAreas: [
      { name: "Bambang", time: "2 days ago" },
      { name: "BGC", time: "2 days ago" },
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
    mapRegion,
    hotspots,
    recentAreas,
  } = useVariables();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Home</Text>

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

      <LeafletMapView lat={lat} lon={lon} />

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

      <View style={styles.recentContainer}>
        <Text style={styles.sectionTitle}>Recent Areas</Text>
        {recentAreas.map((item, index) => (
          <TouchableOpacity key={index} style={styles.recentRow}>
            <Text style={styles.recentText}>{item.name}</Text>
            <View style={styles.recentRight}>
              <Text style={styles.recentTime}>{item.time}</Text>
              <ChevronRight size={18} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 100,
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
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
  distressBox: {
    backgroundColor: "#82003c",
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
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
  },
  panicID: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 6,
    fontWeight: "bold",
  },
  mapWrapper: {
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 16,
  },
  map: {
    flex: 1,
  },
  mapFallback: {
    height: 200,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    borderRadius: 12,
  },
  cacheButton: {
    backgroundColor: "#ec4c73",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 8,
    alignItems: "center",
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
  recentContainer: {
    marginTop: 24,
    paddingBottom: 30,
    backgroundColor: "#FFD9DA",
    padding: 12,
    borderRadius: 10,
  },
  recentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  recentText: {
    fontWeight: "bold",
  },
  recentRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  recentTime: {
    marginRight: 6,
    fontSize: 12,
    color: "#555",
  },
});
