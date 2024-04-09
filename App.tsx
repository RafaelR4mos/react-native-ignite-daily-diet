import { StatusBar } from 'expo-status-bar';
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

import theme from './src/theme';

export default function App() {
  const [fontLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="auto"
        translucent
      />
      {fontLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
