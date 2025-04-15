import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native";

export default function MapStyle() {
  const [mapStyle, setMapStyle] = useState("Default"); // State for map style

  const handleSaveChanges = () => {
    console.log("Selected map style:", mapStyle);
    // Add backend integration here
  };

  return (
    <View style={styles.container}>
      {/* Map style dropdown */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select map style</Text>
        <Picker
          selectedValue={mapStyle}
          style={styles.picker}
          onValueChange={(itemValue) => setMapStyle(itemValue)}
        >
          <Picker.Item label="Default" value="Default" />
          <Picker.Item label="Satellite" value="Satellite" />
          <Picker.Item label="Terrain" value="Terrain" />
          <Picker.Item label="Dark Mode" value="Dark Mode" />
        </Picker>
      </View>

      {/* Save changes button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save changes</Text>
      </TouchableOpacity>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  picker: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: "#ec4c73",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
