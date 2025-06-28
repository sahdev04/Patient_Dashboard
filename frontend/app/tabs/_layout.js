import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // ✅ icon import

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'dashboard' || route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'history') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="dashboard" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="history" options={{ title: 'History' }} />
      
    </Tabs>
  );
}
