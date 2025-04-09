import InputField from "./InputField";
import { Text, View } from "react-native";

export default function FormField({
  name,
  label,
  placeholder,
  errors,
  handleChange,
  handleBlur,
  values,
  secureText,
  textColor,
  inputClass = "",
  labelClass = "",
}) {
  return (
    <View className="gap-2">
      <InputField
        className={`${errors[name] && "border border-red-700 bg-red-100"}`}
        textColor={textColor}
        label={label}
        placeholder={placeholder}
        value={values[name]}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        secureText={secureText}
        inputClass={inputClass}
        labelClass={labelClass}
      />
      {errors[name] && (
        <Text className="text-red-900 font-normal px-2 text-sm">
          {errors[name]}
        </Text>
      )}
    </View>
  );
}
