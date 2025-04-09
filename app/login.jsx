import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import InputField from "@/components/Form/InputField";
import RadialCircle1 from "@/components/SVG/RadialCircle1";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const router = useRouter();

  const handleValidateForm = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format.";
    }

    if (!password) {
      errors.password = "Password is required!";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (handleValidateForm()) {
      console.log("Account Successfully created!");
      console.log("Email: ", email);
      console.log("Password: ", password);
    }
  };

  return (
    <View className="flex-1 bg-blushPink">
      <View className="px-16 h-[62%] justify-end pb-[10%]">
        <Text
          className="text-crimsonRed text-center font-semibold mb-6 tracking-wider"
          style={{ fontSize: 32 }}
        >
          Login to PanicPin
        </Text>
        <InputField
          label="Email"
          placeholder={"example@gmail.com"}
          onChangeText={setEmail}
          value={email}
          inputClass="text-xl"
        />
        <InputField
          label="Password"
          placeholder={"Password"}
          secureText={true}
          onChangeText={setPassword}
          value={password}
          inputClass="text-xl"
        />

        <TouchableOpacity
          className="w-full bg-coralRed py-3 rounded-xl my-4"
          activeOpacity={0.8}
          onPress={handleSubmit}
        >
          <Text className="text-xl font-semibold text-white text-center">
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-dustyRose py-3 rounded-xl"
          activeOpacity={0.8}
          onPress={() => router.navigate("/create-account")}
        >
          <Text className="text-xl font-semibold text-white text-center">
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
      <View className="h-[38%]">
        <RadialCircle1 />
      </View>
    </View>
  );
}
