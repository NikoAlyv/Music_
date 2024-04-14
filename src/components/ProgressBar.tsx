import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { colors } from '../theme/colors';
import { convertTime } from '../utils/time';

interface IProgressBar {
  time: number;
  currentTime: number;
  style?: StyleProp<ViewStyle>;
}

export const ProgressBar: React.FC<IProgressBar> = ({
  currentTime,
  time,
  style,
}) => {
  const progress = ((currentTime / time) * 100).toFixed(2) + '%';
  const saveCurrentTime = currentTime > time ? time : currentTime;

  return (
    <View style={[styles.root, style]}>
      <View style={styles.bar}>
        <View
          style={[styles.progress, { width: progress as DimensionValue }]}
        />
      </View>

      <View style={styles.texts}>
        <Text style={styles.time}>{convertTime(saveCurrentTime)}</Text>
        <Text style={styles.time}>{convertTime(time)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 1,
  },
  bar: {
    backgroundColor: colors.white,
    width: '100%',
    height: 4,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: colors.primary,
    height: '100%',
    position: 'absolute',
    zIndex: 5,
  },
  time: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: colors.white,
  },
  texts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
