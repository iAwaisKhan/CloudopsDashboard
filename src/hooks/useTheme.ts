import { useEffect } from 'react'
import { useAppStore } from '@/store/useAppStore'

/** Syncs the <html class="dark"> with persisted theme on first load */
export function useTheme() {
  const { theme, toggleTheme } = useAppStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return { theme, toggleTheme }
}
