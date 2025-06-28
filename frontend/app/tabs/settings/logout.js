import { useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../../store/authStore';
import { MotiView } from 'moti';

export default function Logout() {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  useEffect(() => {
    const performLogout = async () => {
      // delay animation visibility
      setTimeout(async () => {
        await logout(); // clear storage or tokens
        router.replace('/login');
      }, 1500); // wait so animation appears
    };

    performLogout();
  }, []);

  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'timing',
          duration: 700,
        }}
        style={styles.box}
      >
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.text}>Logging you out...</Text>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 12,
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
