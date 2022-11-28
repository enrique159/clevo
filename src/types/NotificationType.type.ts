const NotificationTypes = Object.freeze({
  success: 'success',
  error: 'error',
  info: 'info',
  warning: 'warning'
})

export type NotificationType = typeof NotificationTypes[keyof typeof NotificationTypes]