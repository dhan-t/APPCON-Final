import { Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ThanksForFeedback() {
  return (
    <View className="items-center py-4 px-12">
      <MaterialIcons name="handshake" size={82} color="#EA638C" />
      <Text className="text-coralRed text-center text-3xl font-medium">
        Thank you for your feedback!
      </Text>
    </View>
  );
}
