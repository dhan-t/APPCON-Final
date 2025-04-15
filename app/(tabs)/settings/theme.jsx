import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Theme() {
  const [theme, setTheme] = useState("Light mode"); // State for theme toggle

  const handleSaveChanges = () => {
    console.log("Selected theme:", theme);
    // Add backend integration here
  };

  return (
    <View style={styles.container}>
      {/* Theme toggle */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select theme</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setTheme("Light mode")}
          >
            <View
              style={[
                styles.radioCircle,
                theme === "Light mode" && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Light mode</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setTheme("Dark mode")}
          >
            <View
              style={[
                styles.radioCircle,
                theme === "Dark mode" && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Dark mode</Text>
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
    borderColor: "#ec4c73",
    backgroundColor: "#ec4c73",
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
