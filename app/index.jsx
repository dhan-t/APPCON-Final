import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="h-full">
      <View className="bg-blue-100 h-full items-center justify-center">
        <Text className="text-red-400">
          Click any button below to see screens
        </Text>
        <Link href={"/home"}>Go to Home</Link>
        <Link href={"/splash-screen"}>Go to splash screen</Link>
        <Link href={"/register-field"}>Go to register field</Link>
      </View>
    </SafeAreaView>
  );
};

export default index;
