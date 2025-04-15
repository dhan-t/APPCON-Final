import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const ToggledView = ({ item }) => {
  return (
    <View className="gap-1 px-7 mt-2 text-xl">
      {item.isAssignedContact && (
        <View>
          <Text className="text-sm">Assigned contact</Text>
        </View>
      )}
      <Text className="text-sm border-t-[1.3px] pt-2 border-b-black">
        {item.userId}
      </Text>
      <Text className="text-sm">User ID</Text>
    </View>
  );
};

export default ContactItem = ({ item, toggleFavContact }) => {
  const [isToggled, setIsToggled] = useState(
    item.isAssignedContact ? true : false
  );

  return (
    <TouchableWithoutFeedback onPress={() => setIsToggled((prev) => !prev)}>
      <View
        className={`${
          item.isFav ? "bg-mistyRose" : "bg-[#F5F5F5]"
        } px-3 py-4  rounded-lg`}
      >
        <View
          pointerEvents="box-none"
          className={`flex-row "
          } justify-between items-center`}
        >
          <View className="flex-row gap-2 items-center">
            <AntDesign name="contacts" size={16} />
            <Text className="text-xl">{item.name}</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              toggleFavContact(item.userId);
            }}
          >
            <View className="h-full">
              {item.isFav ? (
                <AntDesign name="heart" color="#89023E" size={20} />
              ) : (
                <AntDesign name="hearto" color="black" size={20} />
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>

        {isToggled && <ToggledView item={item} />}
      </View>
    </TouchableWithoutFeedback>
  );
};
