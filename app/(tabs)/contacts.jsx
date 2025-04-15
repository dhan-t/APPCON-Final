import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContactStore } from "@/store";

// 🔧 Variables for database integration
const useDatabaseVariables = () => {
  return {
    contacts: useContactStore((state) => state.contacts),
    toggleFavContact: useContactStore((state) => state.toggleFavContact),
    removeContact: useContactStore((state) => state.removeContact),
  };
};

// 🔧 Main Contacts Page
export default function ContactsPage() {
  const { contacts, toggleFavContact, removeContact } = useDatabaseVariables();

  // 🔧 ContactItem Component
  const ContactItem = ({ item }) => {
    const isFavorite = item.isFav;

    return (
      <View
        style={[
          styles.contactItem,
          isFavorite && styles.contactItemFavorite, // Apply pinkish background if favorite
        ]}
      >
        <View style={styles.contactHeader}>
          <Text style={styles.contactName}>{item.name}</Text>
          <TouchableOpacity
            onPress={() => toggleFavContact(item.userId)}
            style={styles.heartButton}
          >
            <Text style={styles.heart}>{isFavorite ? "❤️" : "🤍"}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.contactType}>
          {item.isAssignedContact ? "Assigned contact" : "Friend"}
        </Text>
        <Text style={styles.contactId}>User ID: {item.userId}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeContact(item.userId)}
        >
          <Text style={styles.removeButtonText}>Remove contact</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // 🔧 Main View
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactItem item={item} />}
        keyExtractor={(item) => item.userId}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Hotline</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// 🔧 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  separator: {
    height: 16,
  },
  contactItem: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  contactItemFavorite: {
    backgroundColor: "#FFD9DA", // Pinkish background for favorites
  },
  contactHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  heartButton: {
    padding: 8,
  },
  heart: {
    fontSize: 18,
  },
  contactType: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  contactId: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  removeButton: {
    marginTop: 12,
    backgroundColor: "#82003c",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  addButton: {
    backgroundColor: "#ec4c73",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
