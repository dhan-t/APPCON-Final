import { Text, TextInput, View } from "react-native";

export default function InputField({
  label,
  placeholder,
  secureText = false,
  onChangeText,
  value,
  textColor = "crimsonRed",
  inputClass = "",
  labelClass = "",
}) {
  const textClass = `text-${textColor} pb-2 mt-2 ${labelClass}`;
  const textInputClass = `${inputClass} rounded-xl bg-white px-4 leading-tight`;

  return (
    <View>
      <Text className={textClass}>{label}</Text>
      <TextInput
        className={textInputClass}
        placeholder={placeholder}
        secureTextEntry={secureText}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
