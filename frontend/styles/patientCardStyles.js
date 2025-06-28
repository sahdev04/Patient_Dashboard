import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1c1c1e',
    marginBottom: 10,
  },
  detail: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
  },
  value: {
    fontWeight: '500',
    color: '#111',
  },
});

// Export helper function separately
export const getStatusStyle = (status) => {
  switch (status?.toLowerCase()) {
    case 'active':
      return { color: '#28a745' };
    case 'paused':
      return { color: '#ff9500' };
    case 'inactive':
      return { color: '#ff3b30' };
    default:
      return { color: '#333' };
  }
};
