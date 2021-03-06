import { Subject } from "rxjs/Subject";
import { Exercise } from "./exercise.model";

export class TrainingService{
  exerciseChanged = new Subject<Exercise>();
  private availableExercises: Exercise[] = [
    { id: 'squats', name: 'Squats', duration: 30, calories: 8 },
    { id: 'pushups', name: 'Pushups', duration: 180, calories: 15 },
    { id: 'lunges', name: 'Lunges', duration: 120, calories: 18 },
    { id: 'stretches', name: 'Stretches', duration: 60, calories: 8 }
  ];

  private runningExercise: Exercise;
  private exercises: Exercise[] = [];


  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({...this.runningExercise});
  }

  completeExercise() {
    this.exercises.push({ ...this.runningExercise, date: new Date(), state: 'completed' });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercises.push({ ...this.runningExercise, duration: this.runningExercise.duration * (progress / 100), calories: this.runningExercise.duration * (progress / 100), date: new Date(), state: 'cancelled' });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }
}
