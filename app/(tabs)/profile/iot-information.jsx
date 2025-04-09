import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import InfoRow from "@/components/Display/InfoRow";
import { MINT_GREEN, IOT_INFORMATION } from "@/constants/constants";
import SaveChangesButton from "@/components/Buttons/SaveChangesButton";

export default function IOTInformation() {
  const [IOTInfo, setIOTInfo] = useState(IOT_INFORMATION);

  // TODO: function para sa pag edit ng IOT name

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView className="px-8">
          <Text className="text-4xl font-medium mt-8">IOT Information</Text>

          <View className="w-full bg-whiteSmoke py-5 rounded-xl my-8">
            <View className="size-32 bg-pink-200 rounded-full self-center mb-4"></View>
            <Text className="text-center font-medium text-xl">IOT Device</Text>
          </View>
          <Text>IOT name</Text>
          <View className="bg-whiteSmoke w-full flex-row justify-between items-center p-3 rounded-xl mt-2">
            <Text className="text-lg font-medium">{IOTInfo.Name}</Text>
            <Feather name="edit" size={16} color="black" />
          </View>

          <InfoRow label="Serial number" value={IOTInfo.Serial_number} />
          <InfoRow
            label="Status"
            value={IOTInfo.Status}
            icon={<FontAwesome name="circle" size={10} color={MINT_GREEN} />}
          />
          <InfoRow
            label="Battery level"
            value={IOTInfo.Battery_level}
            icon={
              <FontAwesome6 name="battery-full" size={12} color={MINT_GREEN} />
            }
          />
          <InfoRow
            label="Signal strength"
            value={IOTInfo.Signal_strength}
            icon={<FontAwesome6 name="signal" size={12} color={MINT_GREEN} />}
          />

          <SaveChangesButton />

          <TouchableOpacity
            className="w-full bg-roseWood flex-row justify-center items-center gap-2 py-2 px-4 rounded-xl my-1"
            activeOpacity={0.9}
          >
            <SimpleLineIcons name="reload" size={20} color="white" />
            <Text className="text-white text-lg font-semibold">
              Reset Device
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
