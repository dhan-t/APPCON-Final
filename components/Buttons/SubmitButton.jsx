import { TouchableOpacity, Text } from "react-native";

export default function SubmitButton({ onPress, label }) {
  return (
    <TouchableOpacity
      className="bg-crimsonRed py-3 rounded-xl my-4"
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text className="text-white text-lg text-center font-semibold">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
