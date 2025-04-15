import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { createTamagui, TamaguiProvider } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, StatusBar, Platform } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color"; // Import the library

const _layout = () => {
  const config = createTamagui(defaultConfig);

  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        {/* Full-Screen Wrapper */}
        <View style={styles.fullScreen}>
          {/* Transparent Status Bar */}
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
          />

          {/* Safe Area for Content */}
          <SafeAreaView style={styles.container}>
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen
                name="splash-screen"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen
                name="create-account"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="register-field"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          </SafeAreaView>
        </View>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: "transparent", // Global background color
  },
  container: {
    flex: 1,
    backgroundColor: "white", // Content background color
  },
});

export default _layout;
