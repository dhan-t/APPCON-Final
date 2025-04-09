import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { useContactStore } from "@/store";
import ContactItem from "@components/Contact/ContactItem";

const Contacts = () => {
  const contacts = useContactStore((state) => state.contacts);
  const toggleFavContact = useContactStore((state) => state.toggleFavContact);

  return (
    <SafeAreaView
      className="px-6 h-full w-full pb-[100px]"
      edges={["top", "left", "right"]}
    >
      <Text className="text-4xl mt-7 font-medium mb-8">Contacts</Text>
      <View className="h-full justify-between">
        <View className="">
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={contacts}
            renderItem={({ item }) => (
              <ContactItem toggleFavContact={toggleFavContact} item={item} />
            )}
            keyExtractor={(item) => item.userId}
            ItemSeparatorComponent={() => <View className="h-[20px]" />}
          />
        </View>
        <View className=" pt-10">
          <View className="flex-row gap-4 items-start w-full justify-center">
            <TouchableOpacity activeOpacity={0.4}>
              <Link
                href="contacts/add-user"
                className="py-4 px-6 bg-mistyRose rounded-xl"
              >
                <Text className="text-lg font-medium">Add contact</Text>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4}>
              <Link
                href="contacts/add-hotline"
                className="py-4 px-6 bg-coralRed rounded-xl"
              >
                <Text className="text-lg font-medium">Add hotline</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Contacts;
