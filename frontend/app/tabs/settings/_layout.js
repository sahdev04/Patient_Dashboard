import { Drawer } from 'expo-router/drawer';
import { useAuthStore } from '../../../store/authStore';

export default function SettingsDrawerLayout() {
  const user = useAuthStore((state) => state.user);

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerType: 'front',
      }}
    >
      <Drawer.Screen
        name="index"
        options={{ title: user?.email || 'User Info' }}
      />
      <Drawer.Screen
        name="dashboard"
        options={{ title: 'Dashboard', href: '/(tabs)/dashboard' }}
      />
      <Drawer.Screen
        name="history"
        options={{ title: 'History', href: '/(tabs)/history' }}
      />
      <Drawer.Screen
        name="logout"
        options={{ title: 'Logout' }}
      />
    </Drawer>
  );
}
