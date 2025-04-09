import { Modal, TouchableWithoutFeedback, View, Text } from "react-native";

export default function PopupModal({
  showModal,
  toggleShowModal,
  popupColor,
  children,
}) {
  return (
    <Modal
      visible={showModal}
      transparent={true}
      animationType="fade"
      onRequestClose={toggleShowModal}
    >
      <TouchableWithoutFeedback onPress={toggleShowModal}>
        <View
          className="flex-1 justify-center px-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <View
            className={`py-2 px-6 rounded-xl ${
              popupColor ? popupColor : "bg-white"
            }`}
          >
            {children}
          </View>
          <Text className="text-white text-center my-2">
            tap anywhere to close this pop-up
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
