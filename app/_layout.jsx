import React from "react";
import { Stack } from "expo-router";
import { createTamagui, TamaguiProvider } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";
import { SafeAreaProvider } from "react-native-safe-area-context";
const _layout = () => {
  const config = createTamagui(defaultConfig);

  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="splash-screen" options={{ headerShown: false }} />
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
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

export default _layout;
