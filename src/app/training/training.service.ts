import { Exercise } from "./exercise.model";

export class TrainingService{
  private availableExercises: Exercise[] = [
    { id: 'squats', name: 'Squats', duration: 30, calories: 8 },
    { id: 'pushups', name: 'Pushups', duration: 180, calories: 15 },
    { id: 'lunges', name: 'Lunges', duration: 120, calories: 18 },
    { id: 'stretches', name: 'Stretches', duration: 60, calories: 8 }
  ];

  getAvailableExercises() {
    return this.availableExercises.slice();
  }
}
