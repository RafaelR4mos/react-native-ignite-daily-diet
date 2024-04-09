export interface Meal {
  id: string;
  hour: string;
  title: string;
  type: 'in' | 'out';
}

export interface MealList {
  id: string;
  date: string;
  data: Meal[];
}
