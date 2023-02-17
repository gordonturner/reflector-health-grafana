# 2023-02-17-HTML and CSS

- Move
    if (activityMoveMode == 1) {
        activeEnergyBurned
        activeEnergyBurnedGoal
    }
    
    if (activityMoveMode == 0) {
        appleMoveTime
        appleMoveTimeGoal
    }

- Exercise
  appleExerciseTime: number;
  appleExerciseTimeGoal: number;
  
- Stand
  appleStandHours: number;
  appleStandHoursGoal: number;


fitnessTitle {
      font-size: 23px;
      font-weight: 500;
      text-align: left;
      color: #fffff;
}

fitnessValues {
      font-size: 45px;
      font-weight: 500;
      text-align: center;
}

fitnessUnits {
  font-size: 35px;
  font-weight: 500;
}

fitnessMove {
  color: #fc1d20
} 

fitnessExercise {
  color: #9cfc33
}

fitnessStand {
  color: #32cbd4
}


Move (white text, small)
284/750CAL (red text, large; red text medium)

Exercise (white text, small)
31/30MIN (green text, large; green text medium)

Stand (white text, small)
8/12HRS (blue text, large; blue text medium)



```
{
  "activeEnergyBurned": 285,
  "activeEnergyBurnedGoal": 750,
  "activityMoveMode": 1,
  "appleExerciseTime": 31,
  "appleExerciseTimeGoal": 30,
  "appleMoveTime": 0,
  "appleMoveTimeGoal": 0,
  "appleStandHours": 8,
  "appleStandHoursGoal": 12,
  "dateOfActivity": "2023-02-17T05:00:00Z",
  "userId": "1FD6B750-BDA9-45ED-8FC8-82CD0C0537D2"
}
```