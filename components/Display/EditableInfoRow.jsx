import { View, Text, Pressable, TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { MINT_GREEN } from "@constants/constants";

export default function EditableInfoRow({ label, value, onValueChange }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View className="mb-3">
      <Text>{label}</Text>
      <View className="bg-whiteSmoke my-2 p-3 flex-row items-center justify-between rounded-xl">
        {!isEditing ? (
          <Text className="text-xl">
            {label === "Password" ? "•".repeat(value.length) : value}
          </Text>
        ) : (
          <TextInput
            className="flex-1 p-0 text-xl"
            value={value}
            secureTextEntry={label === "Password"}
            onChangeText={onValueChange}
          />
        )}
        <Pressable onPress={() => setIsEditing(!isEditing)}>
          <Feather
            name="edit"
            size={20}
            color={isEditing ? MINT_GREEN : "black"}
          />
        </Pressable>
      </View>
    </View>
  );
}
