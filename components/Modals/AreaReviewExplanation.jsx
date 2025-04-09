import { Text, View } from "react-native";

export default function AreaReviewExplanation() {
  return (
    <View className="py-4">
      <Text className="text-coralRed text-2xl font-semibold text-center mt-2 mb-4">
        What's this for? (Area review)
      </Text>
      <Text className="text-lg text-coralRed leading-8">
        Your safety matters. Area reviews help us build a safer community by
        identifying potential risks and sharing information.
      </Text>
    </View>
  );
}
