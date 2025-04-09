import { Text, TouchableOpacity, View } from "react-native";
import SplashScreenBg from "@/components/SVG/SplashScreenBg";
import { useRouter } from "expo-router";

export default function splashscreen() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <SplashScreenBg />
      <View className="flex-1 justify-between items-center mt-[30%] mb-[15%]">
        <Text className="text-7xl text-white font-semibold">PanicPin</Text>
        <TouchableOpacity
          onPress={() => router.navigate("/login")}
          activeOpacity={0.6}
        >
          <Text className="text-2xl text-white">Get started {">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
