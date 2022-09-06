import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import RestaurantInfoCard from '../../components/RestaurantInfoCard';

export interface IRestaurantScreenProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space.md};
`;

const RestaurantsListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space.md};
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
