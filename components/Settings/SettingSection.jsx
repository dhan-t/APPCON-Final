import { View, Text } from "react-native";

export default function SettingsSection({ sectionLabel, children }) {
  return (
    <View className="bg-whiteSmoke px-6 pt-5 pb-3 mt-4 rounded-xl">
      <Text className="text-lg font-semibold">{sectionLabel}</Text>
      {children}
    </View>
  );
}
