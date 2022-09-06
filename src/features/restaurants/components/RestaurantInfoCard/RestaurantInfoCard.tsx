import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { COLORS, SIZES } from '../../../../utils/constants';
import IRestaurant from '../../../../@interfaces/IRestaurant';

export interface IRestaurantInfoCardProps {
  restaurant: IRestaurant;
}

const RestaurantInfoCard: FC<IRestaurantInfoCardProps> = ({ restaurant }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 Some Street',
    hours = 'M-F 5 - 11pm',
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Title title={name} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
  },
  cover: {
    padding: SIZES.md,
  },
});

export default RestaurantInfoCard;
