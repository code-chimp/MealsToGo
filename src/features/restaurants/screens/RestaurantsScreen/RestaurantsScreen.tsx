import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { COLORS, SIZES } from '../../../../utils/constants';
import RestaurantInfoCard from '../../components/RestaurantInfoCard';
import styled from 'styled-components/native';

export interface IRestaurantScreenProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${SIZES.md}px;
`;

const RestaurantsListContainer = styled.View`
  flex: 1;
  padding: ${SIZES.md}px;
  background-color: ${COLORS.green};
`;

const RestaurantsScreen: FC<IRestaurantScreenProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar value={searchQuery} onChangeText={setSearchQuery} placeholder="Search" />
      </SearchContainer>
      <RestaurantsListContainer>
        <RestaurantInfoCard restaurant={{}} />
      </RestaurantsListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
