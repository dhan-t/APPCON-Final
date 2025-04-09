import { View, Text } from "react-native";

export default function SettingSectionField({ icon, label }) {
  return (
    <View className="mt-3 flex flex-row gap-3 items-center">
      <View className="bg-mistyRose p-2 rounded-xl">{icon}</View>
      <Text>{label}</Text>
    </View>
  );
}
