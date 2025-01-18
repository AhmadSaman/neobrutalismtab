import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeType = {
  hasDots: boolean;
};

export type ThemeStateType = {
  theme: ThemeType;
  toggleDots: () => void;
};

export const useThemeStore = create<ThemeStateType>()(
  persist(
    (set) => ({
      theme: { hasDots: true },
      toggleDots: () =>
        set((state) => ({ theme: { hasDots: !state.theme.hasDots } })),
    }),
    { name: "theme-config" }
  )
);
