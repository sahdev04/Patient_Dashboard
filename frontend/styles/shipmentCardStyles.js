// styles/shipmentCardStyles.js
import { StyleSheet } from 'react-native';

const shipmentCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#34C759', // green stripe
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1c1c1e',
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    color: '#444',
    marginBottom: 4,
  },
  value: {
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default shipmentCardStyles;
