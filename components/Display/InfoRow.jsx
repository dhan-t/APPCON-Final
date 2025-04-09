import { Text, View } from "react-native";

export default function InfoRow({ label, value, icon }) {
  return (
    <View className="flex-row items-center justify-between my-7">
      <Text>{label}</Text>
      {icon ? (
        <View className="flex-row items-center gap-2">
          {icon}
          <Text>{value}</Text>
        </View>
      ) : (
        <Text>{value}</Text>
      )}
    </View>
  );
}
