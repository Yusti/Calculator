import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
    flex: 1,
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
    color: '#fff',
  },
  aqua: {
    color: '#5cc6b6',
  },
});

export default styles;
