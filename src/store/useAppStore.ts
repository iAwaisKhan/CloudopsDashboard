import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'dark' | 'light'
export type ActiveModule = 's3' | 'lambda' | 'ec2' | 'overview'

interface AppState {
  theme: Theme
  activeModule: ActiveModule
  apiBaseUrl: string

  // Actions
  toggleTheme: () => void
  setActiveModule: (m: ActiveModule) => void
  setApiBaseUrl: (url: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      activeModule: 'overview',
      apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '',

      toggleTheme: () =>
        set((s) => {
          const next = s.theme === 'dark' ? 'light' : 'dark'
          document.documentElement.classList.toggle('dark', next === 'dark')
          return { theme: next }
        }),

      setActiveModule: (activeModule) => set({ activeModule }),
      setApiBaseUrl: (apiBaseUrl) => set({ apiBaseUrl }),
    }),
    {
      name: 'cloudops-prefs',
      partialize: (s) => ({ theme: s.theme, apiBaseUrl: s.apiBaseUrl }),
    }
  )
)
