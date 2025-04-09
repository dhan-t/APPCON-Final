import React, { useEffect, useRef } from "react";
import { View, Text, TouchableHighlight, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormik } from "formik";
import { useRouter } from "expo-router";

import FormField from "@components/Form/FormField.jsx";
import { addHotlineSchema } from "@/schemas";
import SelectItem from "@components/Form/SelectItem";
import { HOTLINETYPES } from "@constants/constants";
import { CITIES } from "@constants/constants";

const AddHotlineScreen = () => {
  const router = useRouter();

  const onSubmit = (values) => {
    console.log("New hotline added: ", values);
    router.dismissAll();
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      nickname: "",
      contactNumber: "",
      hotlineType: "",
      city: "",
      barangay: "",
    },
    validationSchema: addHotlineSchema,
    onSubmit,
  });

  let BARANGAYS = useRef([]);

  useEffect(() => {
    if (values.city != "") {
      setFieldValue("barangay", "");

      let barangays = CITIES.filter(
        (city) => city.name.toLowerCase() == values.city
      )[0]?.barangays;

      BARANGAYS.current = barangays ?? [];
    }
  }, [values.city]);

  return (
    <SafeAreaView className="px-4 h-full w-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-4xl mt-7 font-medium mb-8">Add Hotline</Text>
        <View className="bg-gray-200 px-10 pt-4 pb-10 rounded-lg">
          <View className="gap-4 mb-6">
            <Text className="text-2xl font-semibold text-[#333]">Details</Text>
            <FormField
              name="nickname"
              label="Hotline nickname"
              placeholder="Type here..."
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              secureText={false}
              textColor=""
              labelClass="text-sm font-medium"
              inputClass="py-2 text-base"
            />

            <FormField
              name="contactNumber"
              label="Contact number"
              placeholder="Type here..."
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              secureText={false}
              textColor=""
              labelClass="text-sm font-medium"
              inputClass="text-base py-2"
            />
          </View>

          <View className="gap-4">
            <View className="gap-2">
              <Text className="text-2xl font-semibold text-[#333]">Type</Text>
              <SelectItem
                items={HOTLINETYPES}
                placeholder="Select hotline type"
                label="Hotline type"
                val={values.hotlineType}
                setVal={handleChange("hotlineType")}
              />
              {errors.hotlineType && (
                <Text className="text-red-900 font-normal mt-2 text-sm">
                  {errors.hotlineType}
                </Text>
              )}
            </View>

            <Text className="text-2xl mt-3 font-semibold text-[#333]">
              Location
            </Text>
            <View className="gap-2">
              <View>
                <Text className="text-lg">City</Text>
                <SelectItem
                  items={CITIES}
                  placeholder="Select city"
                  label="City"
                  val={values.city}
                  setVal={handleChange("city")}
                />
                {errors.city && (
                  <Text className="text-red-900 font-normal mt-2 text-sm">
                    {errors.city}
                  </Text>
                )}
              </View>

              <View>
                <Text className="text-lg">Barangay</Text>
                <SelectItem
                  items={BARANGAYS.current}
                  placeholder="Select barangay"
                  label="Barangay"
                  val={values.barangay}
                  setVal={handleChange("barangay")}
                />
                {errors.barangay && (
                  <Text className="text-red-900 font-normal mt-2 text-sm">
                    {errors.barangay}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <TouchableHighlight
          className="mt-4 bg-coralRed rounded-xl"
          underlayColor={"#89023E"}
          onPress={handleSubmit}
        >
          <View className="items-center py-3">
            <Text className="text-white text-xl font-semibold">
              Add hotline
            </Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddHotlineScreen;
