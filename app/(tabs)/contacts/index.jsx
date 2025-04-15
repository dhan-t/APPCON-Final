import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Link } from "expo-router";
import { useContactStore } from "@/store";
import ContactItem from "@components/Contact/ContactItem";

export default function Contacts() {
  const contacts = useContactStore((state) => state.contacts);
  const toggleFavContact = useContactStore((state) => state.toggleFavContact);

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
            borderColor: "transparent",
          },
        ]}
      >
        <Animated.Text
          style={[styles.headerTitle, { fontSize: headerFontSize }]}
        >
          Contacts
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
        <View style={styles.content}>
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={contacts}
            renderItem={({ item }) => (
              <ContactItem toggleFavContact={toggleFavContact} item={item} />
            )}
            keyExtractor={(item) => item.userId}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
          <View style={styles.footer}>
            <View style={styles.buttonRow}>
              <TouchableOpacity activeOpacity={0.4}>
                <Link
                  href="contacts/add-user"
                  style={[styles.button, styles.addUserButton]}
                >
                  <Text style={styles.buttonText}>Add contact</Text>
                </Link>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4}>
                <Link
                  href="contacts/add-hotline"
                  style={[styles.button, styles.addHotlineButton]}
                >
                  <Text style={styles.buttonText}>Add hotline</Text>
                </Link>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    zIndex: 10,
    justifyContent: "flex-end", // Align title to the bottom of the header
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
  separator: {
    height: 20,
  },
  footer: {
    paddingTop: 10,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  addUserButton: {
    backgroundColor: "#fbdede", // Light pink background
  },
  addHotlineButton: {
    backgroundColor: "#ec4c73", // Coral red background
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
