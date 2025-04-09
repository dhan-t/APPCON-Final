import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { MINT_GREEN } from "@/constants/constants";
import { useUserData } from "@/store";

const Profile = () => {
  const userData = useUserData((state) => state.userData);
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="px-8 flex-1 bg-white">
        <Text className="text-4xl font-medium my-8">Profile</Text>
        <TouchableOpacity
          className="w-full bg-whiteSmoke px-5 py-2 rounded-xl mb-4"
          activeOpacity={0.9}
          onPress={() => router.navigate("/profile/personal-details")}
        >
          <View className="flex-row items-center gap-6">
            <View className="size-20 rounded-full bg-[#D9D9D9]">
              <Image />
            </View>
            <View className="flex-1">
              <Text className="text-2xl font-medium text-[#1E1E1E]">
                {userData.username}
              </Text>
              <Text className="text-sm text-[#9A9A9A]">{userData.userID}</Text>
            </View>
            <MaterialCommunityIcons
              name="check-decagram-outline"
              size={24}
              className="justify-end font-thin"
              color={MINT_GREEN}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.navigate("/profile/iot-information")}
          className="w-full bg-whiteSmoke px-5 py-6 rounded-xl"
        >
          <View className="size-32 bg-pink-300 rounded-full self-center"></View>
          <View className="flex-row items-center justify-between">
            <Text className="text-2xl font-medium">IOT Device</Text>
            <View className="flex-row gap-2 items-center">
              <FontAwesome name="circle" size={10} color={MINT_GREEN} />
              <FontAwesome6 name="signal" size={12} color={MINT_GREEN} />
              <FontAwesome6 name="battery-full" size={12} color={MINT_GREEN} />
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Profile;
