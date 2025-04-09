import { Stack } from "expo-router";

const ContactStackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="add-user" />
      <Stack.Screen name="add-hotline" />
    </Stack>
  );
};

export default ContactStackLayout;
