import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feedback, Home, Meal, NewMeal, Statistic } from '../screens/';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="statistic"
        component={Statistic}
      />
      <Screen
        name="meal"
        component={Meal}
      />
      <Screen
        name="newMeal"
        component={NewMeal}
      />
      <Screen
        name="feedback"
        component={Feedback}
      />
    </Navigator>
  );
}
