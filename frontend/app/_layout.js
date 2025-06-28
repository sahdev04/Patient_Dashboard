import { Slot, Redirect, usePathname } from 'expo-router';
import { useAuthStore } from '../store/authStore';
import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export default function Layout() {
  const user = useAuthStore((state) => state.user);
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsChecking(false), 100);
    return () => clearTimeout(timeout);
  }, []);

  if (isChecking) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  // 🚫 No user? Block everything except login
  if (!user && !pathname.startsWith('/login')) {
    return <Redirect href="/login" />;
  }

  // ✅ Already logged in but still on /login? Send to dashboard
  if (user && pathname === '/login') {
    return <Redirect href="/tabs/dashboard" />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <Slot />
        </View>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
