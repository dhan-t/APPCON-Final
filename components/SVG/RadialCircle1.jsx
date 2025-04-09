import React from "react";
import { View } from "react-native";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";

export default function RadialCircle1() {
  return (
    <View className="ml-8 w-[100%] h-[100%]">
      <Svg width="100%" height="100%" viewBox="0 0 363 329" fill="none">
        <Defs>
          <RadialGradient
            id="paint0_radial_359_865"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(108.134 75.5224) rotate(57.4721) scale(1197.03)"
          >
            <Stop stopColor="#FFD9DA" />
            <Stop offset="0.159" stopColor="#CA7893" />
            <Stop offset="0.339" stopColor="#89023E" />
            <Stop offset="0.404" stopColor="#89023E" />
          </RadialGradient>
        </Defs>
        <Circle cx="230" cy="230" r="230" fill="url(#paint0_radial_359_865)" />
      </Svg>
    </View>
  );
}
