import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Notifications() {
  const [isEnabled, setIsEnabled] = useState(true); // State for notifications toggle

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Enable Notifications</Text>
        <View style={styles.radioGroup}>
          {/* On Button */}
          <TouchableOpacity
            style={[styles.radioButton, isEnabled && styles.radioSelected]}
            onPress={() => setIsEnabled(true)}
          >
            <Text style={styles.radioText}>On</Text>
          </TouchableOpacity>

          {/* Off Button */}
          <TouchableOpacity
            style={[styles.radioButton, !isEnabled && styles.radioSelected]}
            onPress={() => setIsEnabled(false)}
          >
            <Text style={styles.radioText}>Off</Text>
          </TouchableOpacity>
        </View>
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
  radioGroup: {
    flexDirection: "row",
    gap: 8,
  },
  radioButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  radioSelected: {
    backgroundColor: "#007BFF",
    borderColor: "#007BFF",
  },
  radioText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
});
