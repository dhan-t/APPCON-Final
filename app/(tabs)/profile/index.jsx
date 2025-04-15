import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { MINT_GREEN } from "@/constants/constants";
import { useUserData } from "@/store";

export default function Profile() {
  const userData = useUserData((state) => state.userData);
  const router = useRouter();

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
          },
        ]}
      >
        <Animated.Text
          style={[styles.headerTitle, { fontSize: headerFontSize }]}
        >
          Profile
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
        <TouchableOpacity
          style={styles.profileCard}
          activeOpacity={0.9}
          onPress={() => router.navigate("/profile/personal-details")}
        >
          <View style={styles.profileRow}>
            <View style={styles.profileImage}>
              <Image />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{userData.username}</Text>
              <Text style={styles.profileID}>{userData.userID}</Text>
            </View>
            <MaterialCommunityIcons
              name="check-decagram-outline"
              size={24}
              color={MINT_GREEN}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iotCard}
          activeOpacity={0.9}
          onPress={() => router.navigate("/profile/iot-information")}
        >
          <View style={styles.iotIcon}></View>
          <View style={styles.iotRow}>
            <Text style={styles.iotTitle}>IOT Device</Text>
            <View style={styles.iotStatus}>
              <FontAwesome name="circle" size={10} color={MINT_GREEN} />
              <FontAwesome6 name="signal" size={12} color={MINT_GREEN} />
              <FontAwesome6 name="battery-full" size={12} color={MINT_GREEN} />
            </View>
          </View>
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

    justifyContent: "flex-end", // Align title to the bottom of the header
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  profileCard: {
    backgroundColor: "#f1f1f1",
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E1E1E",
  },
  profileID: {
    fontSize: 14,
    color: "#9A9A9A",
  },
  iotCard: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  iotIcon: {
    width: 100,
    height: 100,
    backgroundColor: "#ec4c73",
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 8,
  },
  iotRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iotTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E1E1E",
  },
  iotStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
