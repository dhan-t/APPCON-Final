import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const TabIcon = ({ color, Icon, name, focused }) => {
  return (
    <View className="items-center justify-center h-ful">
      <Icon
        width={84}
        height={24}
        stroke={color} // Set the fill color
        strokeWidth={2}
      />
      <Text
        style={{ color: color }}
        numberOfLines={1}
        className={`${
          focused ? "font-semibold" : "font-regular"
        } text-xs text-center w-full`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FB137C",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#161622",
          height: 74,
          paddingTop: 12,
          paddingBottom: 12,
          borderTopWidth: 1,
          borderTopColor: "#161622",
        },
      }}
    >
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              color={color}
              focused={focused}
              Icon={icons.settings}
              name={"Settings"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: "Ai",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              color={color}
              focused={focused}
              Icon={icons.ai}
              name={"Ai"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              color={color}
              focused={focused}
              Icon={icons.home}
              name={"Home"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              color={color}
              focused={focused}
              Icon={icons.contacts}
              name={"Contacts"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              color={color}
              focused={focused}
              Icon={icons.profile}
              name={"Profile"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
