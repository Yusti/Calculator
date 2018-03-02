import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  number: {
    backgroundColor: '#dbfaf7',
  },
  operation: {
    backgroundColor: '#5cc6b6',
  },
  dangerOperation: {
    backgroundColor: '#e54856',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default styles;
