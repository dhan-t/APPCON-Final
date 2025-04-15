import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="accountSetting"
        options={{ title: "Account Setting" }}
      />
      <Stack.Screen
        name="panicpinInfo"
        options={{ title: "PanicPin Information" }}
      />
      <Stack.Screen name="theme" options={{ title: "Theme" }} />
      <Stack.Screen name="textSize" options={{ title: "Text Size" }} />
      <Stack.Screen name="mapStyle" options={{ title: "Map Style" }} />
      <Stack.Screen name="location" options={{ title: "Location" }} />
      <Stack.Screen
        name="panicpinConfigure"
        options={{ title: "Configure your PanicPin" }}
      />
      <Stack.Screen name="notifications" options={{ title: "Notification" }} />
      <Stack.Screen name="about" options={{ title: "About App" }} />
    </Stack>
  );
}
