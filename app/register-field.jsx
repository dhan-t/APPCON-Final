import { View, Text, Pressable } from "react-native";
import { useState } from "react";

import Dropdown from "@/components/Form/Dropdown";
import PopupModal from "@/components/Modals/PopupModal";
import IDSubmissionExplanation from "@/components/Modals/IDSubmissionExplanation";

export default function RegisterField() {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <View className="bg-dustyRose flex-1 justify-center px-16">
      <Text className="text-blushPink text-4xl font-semibold text-center mb-4">
        Verify Account
      </Text>
      <Text className="text-crimsonRed mb-1">Valid ID</Text>
      <Dropdown />
      <View className="bg-white w-full h-[250] my-4 rounded-xl">
        <Text className="text-center text-4xl font-bold">Dito yung camera</Text>
      </View>
      <Pressable onPress={toggleShowModal}>
        <Text className="text-xl underline font-semibold text-center text-white my-2">
          Why do I need to submit my ID?
        </Text>
      </Pressable>
      <Pressable className="py-4 rounded-xl my-2">
        <Text className="text-center text-xl text-white">Register account</Text>
      </Pressable>
      <Pressable className="bg-blushPink rounded-xl my-2">
        <Text className="text-coralRed text-center py-4 text-xl">
          Verify later
        </Text>
      </Pressable>

      <PopupModal showModal={showModal} toggleShowModal={toggleShowModal}>
        <IDSubmissionExplanation />
      </PopupModal>
    </View>
  );
}
