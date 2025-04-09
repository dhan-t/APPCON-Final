import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useUserData } from "@/store";
import { useState } from "react";

import EditableInfoRow from "@/components/Display/EditableInfoRow";
import SaveChangesButton from "@/components/Buttons/SaveChangesButton";

export default function PersonalDetails() {
  const userData = useUserData((state) => state.userData);
  const applyChanges = useUserData((state) => state.applyChanges);
  const [formData, setFormData] = useState(userData);

  const handleChange = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white px-8">
        <View className="mb-8">
          <Text className="text-4xl font-semibold mt-8">Personal Details</Text>
        </View>

        <EditableInfoRow
          label="Username"
          value={formData.username}
          onValueChange={(value) => handleChange("username", value)}
        />
        <EditableInfoRow
          label="Password"
          value={formData.password}
          onValueChange={(value) => handleChange("password", value)}
        />
        <EditableInfoRow
          label="Email"
          value={formData.email}
          onValueChange={(value) => handleChange("email", value)}
        />

        <SaveChangesButton onPress={() => applyChanges(formData)} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
