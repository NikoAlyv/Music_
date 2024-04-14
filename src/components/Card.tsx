import {
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors } from "../theme/colors";

export interface ICard {
  url: string;
  title?: string;
  singer?: string;
  description?: string;
  horizontal?: boolean;
  size?: "s" | "m" | "l";
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

export const Card: React.FC<ICard> = ({
  url,
  description,
  horizontal,
  onPress,
  imageStyle,
  singer,
  size = "m",
  style,
  title,
}) => {
  const isTextsVisible = title || singer || description;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.root, horizontal && styles.horizontal, style]}
    >
      <Image
        source={{
          uri: url,
        }}
        style={[styles[size], styles.image, imageStyle]}
      />
      {isTextsVisible ? (
        <View style={[styles.texts, horizontal && styles.maxWidth]}>
          {title ? (
            <Text
              numberOfLines={2}
              style={[styles.title, size === "s" && styles.largeTitle]}
            >
              {title}
            </Text>
          ) : null}
          {singer ? (
            <Text numberOfLines={2} style={[styles.title, styles.singer]}>
              {singer}
            </Text>
          ) : null}
          {description ? (
            <Text numberOfLines={2} style={[styles.title, styles.singer]}>
              {description}
            </Text>
          ) : null}
        </View>
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  horizontal: {
    flexDirection: "row",
    gap: 15,
  },
  texts: {
    gap: 5,
    maxWidth: 106,
  },
  maxWidth: {
    maxWidth: "auto",
    flex: 1,
  },
  image: {
    borderRadius: 10,
  },
  s: {
    width: 88,
    height: 88,
  },
  m: {
    width: 101,
    height: 81,
  },
  l: {
    width: 106,
    height: 111,
  },
  title: {
    fontFamily: "Nunito-Regular",
    fontSize: 14,
    color: colors.white,
  },
  largeTitle: {
    fontSize: 16,
  },
  singer: {
    fontSize: 13,
  },
});
