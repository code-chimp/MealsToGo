import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
import { ThemeProvider } from 'styled-components';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { theme } from './src/infrastructure/theme';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded && !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
