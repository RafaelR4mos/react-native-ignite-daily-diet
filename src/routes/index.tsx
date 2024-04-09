import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { View } from 'react-native';

export function Routes() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
}
