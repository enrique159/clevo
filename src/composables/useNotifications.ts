import type { NotificationType } from '@/types/NotificationType.type'
import { ElNotification } from 'element-plus'

export function useNotifications() {
  const notify = (title: string, message: string, type: NotificationType = 'info', duration: number = 3000, ) => {
    ElNotification({
      title,
      message,
      duration,
      type
    })
  }

  return { notify }
}