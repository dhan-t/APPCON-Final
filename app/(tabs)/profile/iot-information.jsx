import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import InfoRow from "@/components/Display/InfoRow";
import { MINT_GREEN, IOT_INFORMATION } from "@/constants/constants";
import SaveChangesButton from "@/components/Buttons/SaveChangesButton";

export default function IOTInformation() {
  const [IOTInfo, setIOTInfo] = useState(IOT_INFORMATION);
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 60],
    extrapolate: "clamp",
  });

  const headerFontSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [30, 20],
    extrapolate: "clamp",
  });

  const headerPadding = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [25, 10],
    extrapolate: "clamp",
  });

  const headerBorderColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ["transparent", "#ddd"],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Animated Header */}
        <Animated.View
          style={[
            styles.header,
            {
              height: headerHeight,
              paddingBottom: headerPadding,
              borderBottomColor: headerBorderColor,
              borderColor: "transparent",
            },
          ]}
        >
          <Animated.Text
            style={[styles.headerTitle, { fontSize: headerFontSize }]}
          >
            IOT Information
          </Animated.Text>
        </Animated.View>

        <Animated.ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          <View style={styles.iotDeviceContainer}>
            <View style={styles.iotDeviceIcon}></View>
            <Text style={styles.iotDeviceTitle}>IOT Device</Text>
          </View>
          <Text style={styles.iotNameLabel}>IOT name</Text>
          <View style={styles.iotNameContainer}>
            <Text style={styles.iotName}>{IOTInfo.Name}</Text>
            <Feather name="edit" size={16} color="black" />
          </View>

          <InfoRow label="Serial number" value={IOTInfo.Serial_number} />
          <InfoRow
            label="Status"
            value={IOTInfo.Status}
            icon={<FontAwesome name="circle" size={10} color={MINT_GREEN} />}
          />
          <InfoRow
            label="Battery level"
            value={IOTInfo.Battery_level}
            icon={
              <FontAwesome6 name="battery-full" size={12} color={MINT_GREEN} />
            }
          />
          <InfoRow
            label="Signal strength"
            value={IOTInfo.Signal_strength}
            icon={<FontAwesome6 name="signal" size={12} color={MINT_GREEN} />}
          />

          <SaveChangesButton />

          <TouchableOpacity style={styles.resetButton} activeOpacity={0.9}>
            <SimpleLineIcons name="reload" size={20} color="white" />
            <Text style={styles.resetButtonText}>Reset Device</Text>
          </TouchableOpacity>
        </Animated.ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  headerTitle: {
    fontWeight: "bold",
  },
  scrollView: {
    paddingHorizontal: 16,
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  iotDeviceContainer: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 16,
    alignItems: "center",
  },
  iotDeviceIcon: {
    width: 64,
    height: 64,
    backgroundColor: "#ec4c73",
    borderRadius: 32,
    marginBottom: 8,
  },
  iotDeviceTitle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  iotNameLabel: {
    fontSize: 16,
    marginTop: 8,
  },
  iotNameContainer: {
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
  },
  iotName: {
    fontSize: 16,
    fontWeight: "500",
  },
  resetButton: {
    width: "100%",
    backgroundColor: "#8B0000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 8,
  },
  resetButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
