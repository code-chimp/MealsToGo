import React, { FC } from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import IRestaurant from '../../../../@interfaces/IRestaurant';

export interface IRestaurantInfoCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.secondary};
`;

const RestaurantCardImage = styled(Card.Cover)`
  padding: ${props => props.theme.space.md};
`;

const RestaurantCardTitle = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  padding: ${props => props.theme.space.md};
  color: ${props => props.theme.colors.text.primary};
`;

const RestaurantInfoCard: FC<IRestaurantInfoCardProps> = ({ restaurant }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 Some Street',
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardImage key={name} source={{ uri: photos[0] }} />
      <RestaurantCardTitle>{name}</RestaurantCardTitle>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
