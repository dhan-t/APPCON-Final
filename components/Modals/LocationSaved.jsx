import { Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function LocationSaved() {
  return (
    <View className="items-center py-4">
      <MaterialCommunityIcons
        name="map-marker-check-outline"
        size={82}
        color="#EA638C"
      />
      <Text className="text-coralRed text-xl font-medium">Location Saved!</Text>
    </View>
  );
}
