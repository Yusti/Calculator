import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  grid: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  justCenter: {
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
  },
  flex3: {
    flex: 3,
  },
  flexGrow2: {
    flexGrow: 2,
    flex: 0,
  },
});

export default styles;
