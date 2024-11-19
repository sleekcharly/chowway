import { StyleSheet, Platform } from 'react-native';

// Custom styling for andriod phones
export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 32 : 0,
    paddingBottom: 24,
  },
});
