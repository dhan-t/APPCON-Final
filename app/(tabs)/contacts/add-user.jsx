import { View, Text, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormik } from "formik";
import { useRouter } from "expo-router";
import { RadioGroup, Label } from "tamagui";

import FormField from "@components/Form/FormField";
import { addUserSchema } from "@/schemas";
import { useContactStore } from "@/store";

const AddUserScreen = () => {
  const router = useRouter();
  const addNewContact = useContactStore((state) => state.addNewContact);

  const onSubmit = (values) => {
    console.log("New user added: ", values);

    // Make a post request to add friend
    // Before making post, have to make sure that friend userId exists
    const newContact = {
      userId: values.userId,
      name: values.name,
      type: "contact",
      isAssignedContact: false,
      isFav: values.type == "emergencyContact" ? true : false,
    };

    addNewContact(newContact);

    router.dismissAll();
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      userId: "",
      type: "",
    },
    validationSchema: addUserSchema,
    onSubmit,
  });

  const RadioItemWithLabel = ({ label, value }) => {
    return (
      <View className="flex-row gap-2 items-center">
        <RadioGroup.Item
          value={value}
          style={{ backgroundColor: "#ddd" }}
          id={value}
          height={20}
          width={20}
        >
          <RadioGroup.Indicator style />
        </RadioGroup.Item>
        <Label style={{ fontSize: 16, lineHeight: 26 }} htmlFor={value}>
          {label}
        </Label>
      </View>
    );
  };

  return (
    <SafeAreaView className="px-4 h-full w-full">
      <Text className="text-4xl mt-7 font-medium mb-8">Add user</Text>
      <View className="bg-gray-200 px-10 pt-4 pb-10 rounded-lg">
        <View className="gap-4 mb-6">
          <FormField
            name="name"
            label="Name"
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
            name="userId"
            label="User ID"
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
        <View className="">
          <Text className="text-lg font-medium mb-4">Type of contact:</Text>
          <RadioGroup value={values.type} onValueChange={handleChange("type")}>
            <View className="flex gap-2">
              <RadioItemWithLabel
                label={"Emergency contact"}
                value={"emergencyContact"}
              />
              <RadioItemWithLabel label={"Friend"} value={"friend"} />
            </View>
          </RadioGroup>
          {errors.type && (
            <Text className="text-red-900 font-normal mt-2 text-sm">
              {errors["type"]}
            </Text>
          )}
        </View>
      </View>
      <TouchableHighlight
        className="mt-4 bg-coralRed rounded-xl"
        underlayColor={"#89023E"}
        onPress={handleSubmit}
      >
        <View className="items-center py-3">
          <Text className="text-white text-xl font-semibold">Add user</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default AddUserScreen;
