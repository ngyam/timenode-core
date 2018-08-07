export enum ExecuteStatus {
  PENDING = 'Another execution is already pending.',
  FAILED = 'Unable to send the execute action.',
  SUCCESS = 'Transaction executed successfully.',
  NO_ACCOUNTS = 'All accounts in use'
}
