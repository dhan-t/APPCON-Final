import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PanicPinConfigure() {
  const [accidentalTouch, setAccidentalTouch] = useState("Enabled"); // State for accidental touch prevention
  const [pressCount, setPressCount] = useState("2 taps"); // State for number of presses

  const handleSaveChanges = () => {
    // Logic to save changes (e.g., send to backend)
    const settings = {
      accidentalTouch,
      pressCount,
    };
    console.log("Saved settings:", settings);
    // Add backend integration here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activation configuration</Text>

      {/* Accidental touch prevention */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Accidental touch prevention</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setAccidentalTouch("Enabled")}
          >
            <View
              style={[
                styles.radioCircle,
                accidentalTouch === "Enabled" && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Enabled</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setAccidentalTouch("Disabled")}
          >
            <View
              style={[
                styles.radioCircle,
                accidentalTouch === "Disabled" && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Disabled</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Number of press to activate */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Number of press to activate</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setPressCount("2 taps")}
          >
            <View
              style={[
                styles.radioCircle,
                pressCount === "2 taps" && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>2 taps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setPressCount("4 taps")}
          >
            <View
              style={[
                styles.radioCircle,
                pressCount === "4 taps" && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>4 taps</Text>
          </TouchableOpacity>
        </View>
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
  radioGroup: {
    gap: 12,
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    marginRight: 12,
  },
  radioSelected: {
    borderColor: "#007BFF",
    backgroundColor: "#007BFF",
  },
  radioLabel: {
    fontSize: 16,
    color: "#000",
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
