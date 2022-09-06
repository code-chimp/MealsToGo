import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <RestaurantsScreen searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <StatusBar style="auto" />
    </>
  );
}
