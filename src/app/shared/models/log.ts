export enum Severity {
  Verbose = 0,
  Debug = 1,
  Information = 2,
  Warning = 3,
  Error = 4,
  Fatal = 5
} 
export interface Log {
  userId: string;
  description: string;
  timeStamp: Date; 
  severity: Severity;
}
