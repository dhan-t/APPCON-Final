import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="iot-information" options={{ headerShown: false }} />
        <Stack.Screen
          name="personal-details"
          options={{ headerShown: false }}
        />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Ensure consistent background color
  },
});
