import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '../../../store/authStore'; // ✅ import auth store

const settingsOptions = [
  { label: 'Account', icon: 'person-circle-outline' },
  { label: 'Notifications', icon: 'notifications-outline' },
  { label: 'Privacy', icon: 'lock-closed-outline' },
];

export default function SettingsIndex() {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout); // ✅ get logout method
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);

    setTimeout(async () => {
      try {
        await AsyncStorage.removeItem('auth-token');
        logout(); // ✅ clear Zustand user state
        router.replace('/login');
      } catch (error) {
        console.error('Logout failed:', error);
        setLoggingOut(false);
      }
    }, 1500); // delay to allow animation
  };

  if (loggingOut) {
    return (
      <View style={styles.logoutContainer}>
        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'timing', duration: 600 }}
          style={styles.logoutAnimBox}
        >
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.logoutAnimText}>Logging you out...</Text>
        </MotiView>
      </View>
    );
  }

  return (
    <View style={[globalStyles.container, styles.container]}>
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 600 }}
        style={styles.header}
      >
        <View style={styles.iconWrapper}>
          <Ionicons name="settings" size={40} color="#007AFF" />
        </View>
        <Text style={styles.title}>Settings</Text>
      </MotiView>

      <View style={styles.optionsContainer}>
        {settingsOptions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionRow}>
            <Ionicons name={item.icon} size={24} color="#007AFF" style={styles.optionIcon} />
            <Text style={styles.optionText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'timing', duration: 500, delay: 300 }}
        style={styles.logoutWrapper}
      >
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  iconWrapper: {
    backgroundColor: '#EAF3FF',
    padding: 20,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1c1c1e',
  },
  optionsContainer: {
    marginHorizontal: 20,
    gap: 15,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#f2f2f7',
    borderRadius: 10,
  },
  optionIcon: {
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#1c1c1e',
  },
  logoutWrapper: {
    marginTop: 40,
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    gap: 10,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  logoutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoutAnimBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoutAnimText: {
    marginTop: 14,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
