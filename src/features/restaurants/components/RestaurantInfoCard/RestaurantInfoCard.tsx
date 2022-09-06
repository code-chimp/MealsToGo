import React, { FC } from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { COLORS, SIZES } from '../../../../utils/constants';
import IRestaurant from '../../../../@interfaces/IRestaurant';

export interface IRestaurantInfoCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = styled(Card)`
  background-color: ${COLORS.white};
`;

const RestaurantCardImage = styled(Card.Cover)`
  padding: ${SIZES.md}px;
`;

const RestaurantCardTitle = styled.Text`
  padding: ${SIZES.md}px;
  font-weight: bold;
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
