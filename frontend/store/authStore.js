import { create } from 'zustand'; // ✅ correct
import { loginUser } from '../api/apiClient';

export const useAuthStore = create((set) => ({
  user: null,
  login: async (email, password) => {
    try {
      const user = await loginUser({ email, password });
      set({ user });
      return true;
    } catch {
      return false;
    }
  },
  logout: () => set({ user: null }),
}));
