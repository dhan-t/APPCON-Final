import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Import Picker from @react-native-picker/picker

export default function Location() {
  const [locationHistory, setLocationHistory] = useState("Disabled");
  const [dataSharingAuthorities, setDataSharingAuthorities] =
    useState("Enabled");
  const [dataForImprovement, setDataForImprovement] = useState("Enabled");
  const [sharingWithUsers, setSharingWithUsers] = useState("Emergencies only");
  const [backgroundTracking, setBackgroundTracking] = useState("Enabled");

  return (
    <View style={styles.container}>
      {/* Save my location history */}
      <View style={styles.row}>
        <Text style={styles.label}>Save my location history</Text>
        <Picker
          selectedValue={locationHistory}
          style={styles.picker}
          onValueChange={(itemValue) => setLocationHistory(itemValue)}
        >
          <Picker.Item label="Disabled" value="Disabled" />
          <Picker.Item label="Enabled" value="Enabled" />
        </Picker>
      </View>

      {/* Location data sharing with authorities */}
      <View style={styles.row}>
        <Text style={styles.label}>Location data sharing with authorities</Text>
        <Picker
          selectedValue={dataSharingAuthorities}
          style={styles.picker}
          onValueChange={(itemValue) => setDataSharingAuthorities(itemValue)}
        >
          <Picker.Item label="Disabled" value="Disabled" />
          <Picker.Item label="Enabled" value="Enabled" />
        </Picker>
      </View>

      {/* Location data for app improvement */}
      <View style={styles.row}>
        <Text style={styles.label}>Location data for app improvement</Text>
        <Picker
          selectedValue={dataForImprovement}
          style={styles.picker}
          onValueChange={(itemValue) => setDataForImprovement(itemValue)}
        >
          <Picker.Item label="Disabled" value="Disabled" />
          <Picker.Item label="Enabled" value="Enabled" />
        </Picker>
      </View>

      {/* Location sharing with users */}
      <View style={styles.row}>
        <Text style={styles.label}>Location sharing with users</Text>
        <Picker
          selectedValue={sharingWithUsers}
          style={styles.picker}
          onValueChange={(itemValue) => setSharingWithUsers(itemValue)}
        >
          <Picker.Item label="Disabled" value="Disabled" />
          <Picker.Item label="Enabled" value="Enabled" />
          <Picker.Item label="Emergencies only" value="Emergencies only" />
        </Picker>
      </View>

      {/* Allow background location tracking */}
      <View style={styles.row}>
        <Text style={styles.label}>Allow background location tracking</Text>
        <Picker
          selectedValue={backgroundTracking}
          style={styles.picker}
          onValueChange={(itemValue) => setBackgroundTracking(itemValue)}
        >
          <Picker.Item label="Disabled" value="Disabled" />
          <Picker.Item label="Enabled" value="Enabled" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#000",
    flex: 1,
  },
  picker: {
    width: 150,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
});
