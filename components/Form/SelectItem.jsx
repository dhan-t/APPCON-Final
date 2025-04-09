import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { Adapt, Select, Sheet } from "tamagui";

const SelectItem = ({
  items,
  placeholder,
  label,
  selectItemId,
  val,
  setVal,
}) => {
  return (
    <Select
      value={val}
      onValueChange={setVal}
      disablePreventBodyScroll
      id={selectItemId}
    >
      <Select.Trigger
        width={220}
        iconAfter={<Feather name="chevron-down" size={10} color={"black"} />}
      >
        <Select.Value placeholder={placeholder} />
      </Select.Trigger>

      <Adapt platform="touch">
        <Sheet modal dismissOnSnapToBottom animation="fast">
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.Viewport>
          <Select.Group>
            <Select.Label>{label}</Select.Label>
            {/* for longer lists memoizing these is useful */}
            {React.useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}
                    >
                      <Select.ItemText>{item.name}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Feather name="check" size={24} color="black" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  );
                }),
              [items]
            )}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select>
  );
};

export default SelectItem;
