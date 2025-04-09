import { View } from "react-native";
import Svg, {
  Circle,
  Defs,
  RadialGradient,
  Stop,
  G,
  ClipPath,
  Rect,
} from "react-native-svg";

const SplashScreenBg = () => {
  return (
    <View className="absolute w-[100%] h-[100%]">
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 393 852"
        fill="none"
        preserveAspectRatio="none"
      >
        <Defs>
          <RadialGradient
            id="paint0_radial_430_2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-157.728 -44.7463) rotate(57.4721) scale(3047.23)"
          >
            <Stop stopColor="#FFD9DA" />
            <Stop offset="0.159" stopColor="#CA7893" />
            <Stop offset="0.339" stopColor="#89023E" />
            <Stop offset="0.404" stopColor="#89023E" />
          </RadialGradient>
          <ClipPath id="clip0_430_2">
            <Rect width={393} height={852} fill="white" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#clip0_430_2)">
          <Rect width={393} height={852} fill="white" />
          <Circle
            cx="152.5"
            cy="348.5"
            r="585.5"
            fill="url(#paint0_radial_430_2)"
          />
        </G>
      </Svg>
    </View>
  );
};

export default SplashScreenBg;
