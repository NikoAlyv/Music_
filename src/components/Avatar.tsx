import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors } from "../theme/colors";

interface IAvatar {
  title: string;
  caption: string;
  url?: string;
  style?: StyleProp<ViewStyle>;
}

export const Avatar: React.FC<IAvatar> = ({ caption, url, title, style }) => {
  return (
    <View style={[styles.root, style]}>
      {url ? (
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: url,
          }}
        />
      ) : null}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },
  title: {
    fontFamily: "Nunito-Bold",
    color: colors.white,
    fontSize: 18,
    lineHeight: 20,
  },
  caption: {
    fontFamily: "Nunito-Regular",
    color: colors.lightGray,
    fontSize: 14,
    lineHeight: 20,
  },
});
