import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ContactAdded() {
  return (
    <View className="items-center py-4">
      <Ionicons name="person-circle-outline" size={82} color="#EA638C" />
      <Text className="text-coralRed text-2xl font-medium">Contact Added!</Text>
    </View>
  );
}
