enum ENotificationType {
  Info = 0,
  Warning = 1,
  Error = 2,
  Success = 3
}

export default ENotificationType

export const ENotificationTypeLabel = new Map<number, string>([
  [ENotificationType.Info, 'info'],
  [ENotificationType.Warning, 'warning'],
  [ENotificationType.Error, 'error'],
  [ENotificationType.Success, 'success']
])
