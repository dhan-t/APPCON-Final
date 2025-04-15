import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TextSize() {
  const [textSize, setTextSize] = useState("Medium"); // State for text size

  const handleSaveChanges = () => {
    console.log("Selected text size:", textSize);
    // Add backend integration here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text Size</Text>

      {/* Text size slider */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select text size</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setTextSize("Small")}
          >
            <View
              style={[
                styles.radioCircle,
                textSize === "Small" && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Small</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setTextSize("Medium")}
          >
            <View
              style={[
                styles.radioCircle,
                textSize === "Medium" && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioRow}
            onPress={() => setTextSize("Large")}
          >
            <View
              style={[
                styles.radioCircle,
                textSize === "Large" && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Large</Text>
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
