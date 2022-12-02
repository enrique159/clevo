import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/appStore';

export const useApp = () => {
  const appStpre = useAppStore();
  const { rememberSession, locale } = storeToRefs(appStpre);

  const setRememberSession = (value: boolean) => {
    appStpre.setRememberSession(value);
  }

  const setLocale = (value: string) => {
    appStpre.setLocale(value);
  }

  return {
    // Properties
    rememberSession,
    locale,
    // Methods
    setRememberSession,
    setLocale
  }
}