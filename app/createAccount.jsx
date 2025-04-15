import { Text, TouchableOpacity, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { useFormik } from "formik";

import { newAccountSchema } from "@/schemas";
import FormField from "@/components/Form/FormField";
import SubmitButton from "@/components/Buttons/SubmitButton";
import RadialCircle2 from "@/components/SVG/RadialCircle2";

export default function createAccount() {
  const router = useRouter();

  const onSubmit = () => {
    console.log("submitted!");
    router.navigate("/register-field");
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: newAccountSchema,
    onSubmit,
  });

  return (
    <View className="flex-1 bg-dustyRose">
      <View className="w-full h-[78%] justify-end pb-[8%] px-[10%]">
        <Text
          className="text-blushPink font-semibold text-center tracking-widest"
          style={{ fontSize: 34 }}
        >
          Create an account
        </Text>

        <FormField
          name="firstName"
          label="First name"
          placeholder="Firstname"
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          textColor="blushPink"
          inputClass="text-xl"
        />

        <FormField
          name="lastName"
          label="Last name"
          placeholder="Lastname"
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          textColor="blushPink"
          inputClass="text-xl"
        />

        <FormField
          name="email"
          label="Email"
          placeholder="example@gmail.com"
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          textColor="blushPink"
        />

        <FormField
          name="password"
          label="Password"
          placeholder="Password"
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          textColor="blushPink"
          secureText={true}
        />

        <SubmitButton onPress={handleSubmit} label="Proceed to verification" />
        <Link href={"/login"} asChild>
          <TouchableOpacity
            className="bg-blushPink py-3 rounded-xl"
            activeOpacity={0.8}
          >
            <Text className="text-coralRed text-lg text-center font-semibold">
              I already have an account
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View className="w-full h-[22%]">
        <RadialCircle2 />
      </View>
    </View>
  );
}
