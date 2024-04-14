import { View, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../theme/colors';

interface IHeader {
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Header: React.FC<IHeader> = ({ left, right, style, title }) => {
  return (
    <View style={[styles.root, style]}>
      {left}
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {right}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    color: colors.white,
    fontSize: 18,
    lineHeight: 21,
  },
});
