import { StyleSheet } from 'react-native';

export const CommonStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexGrowNone: {
    flexGrow: 0,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexShrink: {
    flexShrink: 1,
  },
  flexJustifyCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  flexAlignCenter: {
    flex: 1,
    alignItems: 'center',
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  flexAlignRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexAlignJustifyCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  justifyCenterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alignCenterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignJustifyCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignJustifyCenterRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexAlignJustifyCenterRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  alignCenterJustifyBetweenRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  justifyBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  alginSelfCenter: {
    alignSelf: 'center',
  },
  alginSelfEnd: {
    alignSelf: 'flex-end',
  },
  alginSelfStart: {
    alignSelf: 'flex-start',
  },
  absolute: {
    position: 'absolute',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  fullWidthHeight: {
    width: '100%',
    height: '100%',
  },
  none: {
    display: 'none',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
});
