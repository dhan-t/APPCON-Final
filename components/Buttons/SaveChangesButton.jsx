import { TouchableOpacity, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function SaveChangesButton({ onPress }) {
  return (
    <TouchableOpacity
      className="w-full bg-coralRed flex-row justify-center items-center gap-2 py-3 px-4 rounded-xl my-1"
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Feather name="save" size={20} color="white" />
      <Text className="text-white text-lg font-semibold">Save changes</Text>
    </TouchableOpacity>
  );
}
