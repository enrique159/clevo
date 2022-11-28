import type { NotificationType } from '@/types/NotificationType.type'
import { ElMessage } from "element-plus"

export function useMessage() {
  const message = (message: string, type: NotificationType = 'info', duration: number = 3000, close: boolean = false): void => {
    ElMessage({
      message,
      type,
      duration,
      showClose: close
    })
  }

  return { message }
}