import { Text, View, Animated } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useUserData } from "@/store";
import { useState, useRef } from "react";

import EditableInfoRow from "@/components/Display/EditableInfoRow";
import SaveChangesButton from "@/components/Buttons/SaveChangesButton";

export default function PersonalDetails() {
  const userData = useUserData((state) => state.userData);
  const applyChanges = useUserData((state) => state.applyChanges);
  const [formData, setFormData] = useState(userData);
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 60],
    extrapolate: "clamp",
  });

  const headerFontSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [30, 20],
    extrapolate: "clamp",
  });

  const headerPadding = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [25, 10],
    extrapolate: "clamp",
  });

  const headerBorderColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ["transparent", "#ddd"],
    extrapolate: "clamp",
  });

  const handleChange = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        {/* Animated Header */}
        <Animated.View
          style={{
            height: headerHeight,
            paddingHorizontal: 16,
            paddingBottom: headerPadding,
            borderBottomColor: headerBorderColor,
            borderColor: "transparent",
          }}
        >
          <Animated.Text
            style={{
              fontSize: headerFontSize,
              fontWeight: "bold",
            }}
          >
            Personal Details
          </Animated.Text>
        </Animated.View>

        <Animated.ScrollView
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          <View className="mb-8 px-8">
            <EditableInfoRow
              label="Username"
              value={formData.username}
              onValueChange={(value) => handleChange("username", value)}
            />
            <EditableInfoRow
              label="Password"
              value={formData.password}
              onValueChange={(value) => handleChange("password", value)}
            />
            <EditableInfoRow
              label="Email"
              value={formData.email}
              onValueChange={(value) => handleChange("email", value)}
            />

            <SaveChangesButton onPress={() => applyChanges(formData)} />
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
