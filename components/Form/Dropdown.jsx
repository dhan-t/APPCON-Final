import { useState } from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const VALIDIDLIST = [
  { id: "1", idName: "Barangay ID" },
  { id: "2", idName: "National ID" },
  { id: "3", idName: "Passport" },
  { id: "4", idName: "TIN ID" },
  { id: "5", idName: "UMID" },
  { id: "6", idName: "School ID" },
  { id: "7", idName: "Voters ID" },
  { id: "8", idName: "SSS ID" },
  { id: "9", idName: "NBI Clearance" },
  { id: "10", idName: "Philhealth ID" },
  { id: "11", idName: "Drivers license" },
];

export default function Dropdown() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  return (
    <View>
      <TouchableOpacity
        onPress={toggleIsExpanded}
        activeOpacity={0.9}
        className="flex-row justify-between bg-white w-full p-3 rounded-xl"
      >
        <Text className="text-crimsonRed ">Select valid ID</Text>
        <MaterialIcons
          name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="#89023E"
        />
      </TouchableOpacity>
      {isExpanded ? (
        <View className="absolute top-14 max-h-[50] w-full px-4 py-2 bg-white rounded-lg z-10">
          <FlatList
            data={VALIDIDLIST}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.7}>
                <Text>{item.idName}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : null}
    </View>
  );
}
