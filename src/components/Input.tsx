import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../theme/colors';

interface IInput {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  onFocus?: () => void;
  placeholderTextColor?: string;
  onBlur?: () => void;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export const Input: React.FC<IInput> = ({
  setValue,
  value,
  placeholder,
  placeholderTextColor = colors.white,
  icon,
  style,
  onBlur,
  inputStyle,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onInputFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const onInputBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  return (
    <View style={[styles.root, isFocused && styles.focused, style]}>
      {icon ? icon : null}
      <TextInput
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChangeText={setValue}
        value={value}
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 22,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    maxHeight: 50,
  },
  input: {
    paddingVertical: 11,
    height: '100%',
    color: colors.white,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    flexGrow: 1,
  },
  focused: {
    borderColor: colors.lightGray,
  },
});
