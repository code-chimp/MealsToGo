import React, { FC } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { COLORS, SIZES } from '../../../../utils/constants';
import RestaurantInfoCard from '../../components/RestaurantInfoCard';

export interface IRestaurantScreenProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const RestaurantsScreen: FC<IRestaurantScreenProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar value={searchQuery} onChangeText={setSearchQuery} placeholder="Search" />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard restaurant={{}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: SIZES.md,
  },
  list: {
    flex: 1,
    backgroundColor: COLORS.blue,
    padding: SIZES.md,
  },
});

export default RestaurantsScreen;
