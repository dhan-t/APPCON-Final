import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useRouter } from "expo-router";
import SettingsSection from "@/components/Settings/SettingSection";
import SettingSectionField from "@/components/Settings/SettingSectionField";
import { useUserData } from "@/store";

const Settings = () => {
  const userData = useUserData((state) => state.userData);
  const router = useRouter();
  
  return (
    <SafeAreaProvider>
      <SafeAreaView className="px-6 h-full w-full bg-white">
        <Text className="text-4xl mt-7 font-medium">App Settings</Text>
        <TouchableOpacity
          onPress={() => router.navigate("/profile")}
          activeOpacity={0.8}
          className="bg-whiteSmoke px-6 py-2  mt-6 flex flex-row items-center justify-between rounded-xl"
        >
          <View className="flex flex-row gap-6 items-center">
            <View className="size-20 bg-lightGray rounded-full"></View>
            <Text className="text-xl">{userData.username}</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#1E1E1E" />
        </TouchableOpacity>

        <SettingsSection sectionLabel="Location access">
          <SettingSectionField
            label="Location privacy"
            icon={<MaterialIcons name="my-location" size={24} color="black" />}
          />
        </SettingsSection>

        <SettingsSection sectionLabel="App privacy">
          <SettingSectionField
            label="Location privacy"
            icon={<MaterialIcons name="my-location" size={24} color="black" />}
          />
          <SettingSectionField
            label="Information privacy"
            icon={<SimpleLineIcons name="info" size={24} color="black" />}
          />
        </SettingsSection>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Settings;
