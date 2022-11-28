import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/appStore';

export const useApp = () => {
  const appStpre = useAppStore();
  const { rememberSession } = storeToRefs(appStpre);

  const setRememberSession = (value: boolean) => {
    appStpre.setRememberSession(value);
  }

  return {
    // Properties
    rememberSession,
    // Methods
    setRememberSession
  }
}