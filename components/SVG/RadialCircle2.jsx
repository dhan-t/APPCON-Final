import React from "react";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";

export default function RadialCircle2() {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 350 195" fill="none">
      <Defs>
        <RadialGradient
          id="paint0_radial_359_893"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-1.8657 75.5223) rotate(57.4721) scale(1197.03)"
        >
          <Stop stopColor="#FFD9DA" />
          <Stop offset="0.159" stopColor="#CA7893" />
          <Stop offset="0.339" stopColor="#89023E" />
          <Stop offset="0.404" stopColor="#89023E" />
        </RadialGradient>
      </Defs>
      <Circle
        cx="120"
        cy="230"
        r="230"
        transform="rotate(-90 120 230)"
        fill="url(#paint0_radial_359_893)"
      />
    </Svg>
  );
}
