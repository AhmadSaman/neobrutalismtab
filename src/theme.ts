import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeType = {
  hasDots: boolean;
  type: string;
};

export type ThemeStateType = {
  theme: ThemeType;
  toggleDots: () => void;
  setType: (newThemeType: string) => void;
};

export const useThemeStore = create<ThemeStateType>()(
  persist(
    (set) => ({
      theme: { hasDots: true, type: "" },
      toggleDots: () =>
        set((state) => ({
          theme: { ...state.theme, hasDots: !state.theme.hasDots },
        })),
      setType: (newThemeType: string) =>
        set((state) => ({
          theme: { ...state.theme, type: newThemeType },
        })),
    }),
    { name: "theme-config" }
  )
);
