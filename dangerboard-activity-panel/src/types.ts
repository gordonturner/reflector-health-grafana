export interface ReactDashboardOptions {
  apiUrl?: string;
  installId?: string;
  refreshInMs?: number;
}

export const defaults: ReactDashboardOptions = {
  // Default values
};

/**
 * Interfaces for the response from React Dashboard API
 * 
 * Example response:
 * 
 * {
 *   "activeEnergyBurned": 224,
 *   "activeEnergyBurnedGoal": 750,
 *   "activityMoveMode": 1,
 *   "appleExerciseTime": 25,
 *   "appleExerciseTimeGoal": 30,
 *   "appleMoveTime": 0,
 *   "appleMoveTimeGoal": 0,
 *   "appleStandHours": 6,
 *   "appleStandHoursGoal": 12,
 *   "dateOfActivity": "2023-02-17T05:00:00Z",
 *   "userId": "1FD6B750-BDA9-45ED-8FC8-82CD0C0537D2"
 * }
 * 
 */
export interface ReactDashboardData {
  activeEnergyBurned: number;
  activeEnergyBurnedGoal: number;
  activityMoveMode: number;
  appleExerciseTime: number;
  appleExerciseTimeGoal: number;
  appleMoveTime: number;
  appleMoveTimeGoal: number;
  appleStandHours: number;
  appleStandHoursGoal: number;
  dateOfActivity: string;
  userId: string;
  actualMove: number;
  actualMoveGoal: number;
  actualMoveUnit: string;
}
