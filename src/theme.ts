import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeType = {
  hasDots: boolean;
  isDark: boolean;
  type: string;
};

export type ThemeStateType = {
  theme: ThemeType;
  toggleDark: () => void;
  toggleDots: () => void;
  setType: (newThemeType: string) => void;
};

export const useThemeStore = create<ThemeStateType>()(
  persist(
    (set) => ({
      theme: { hasDots: true, type: "", isDark: false },
      toggleDots: () =>
        set((state) => ({
          theme: { ...state.theme, hasDots: !state.theme.hasDots },
        })),
      toggleDark: () =>
        set((state) => ({
          theme: { ...state.theme, isDark: !state.theme.isDark },
        })),
      setType: (newThemeType: string) =>
        set((state) => ({
          theme: { ...state.theme, type: newThemeType },
        })),
    }),
    { name: "theme-config" }
  )
);
