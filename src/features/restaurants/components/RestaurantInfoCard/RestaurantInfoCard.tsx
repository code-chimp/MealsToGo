import React, { FC } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import IRestaurant from '../../../../@interfaces/IRestaurant';
import star from '../../../../../assets/star';
import open from '../../../../../assets/open';
import { COLORS, SIZES } from '../../../../utils/constants';
import { Image } from 'react-native';

export interface IRestaurantInfoCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.secondary};
`;

const RestaurantCardImage = styled(Card.Cover)`
  padding: ${props => props.theme.space.md};
`;

const InfoWrapper = styled.View`
  padding: ${props => props.theme.space.md};
`;

const Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.text.primary};
`;

const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${props => props.theme.sizes.sm};
  padding-bottom: ${props => props.theme.sizes.sm};
`;

const Rating = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

const Info = styled.View`
  flex: 3;
  flex-direction: row;
  justify-content: flex-end;
`;

const RestaurantInfoCard: FC<IRestaurantInfoCardProps> = ({ restaurant }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 Some Street',
    rating = 3.2,
    isOpenNow = true,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardImage key={name} source={{ uri: photos[0] }} />
      <InfoWrapper>
        <Title>{name}</Title>
        <Row>
          <Rating>
            {Array.from(new Array(Math.floor(rating))).map(() => (
              <SvgXml xml={star} width={SIZES.md} height={SIZES.md} />
            ))}
          </Rating>
          <Info>
            {isClosedTemporarily && (
              <Text style={{ color: COLORS.red, marginRight: SIZES.md }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            {isOpenNow && (
              <SvgXml
                xml={open}
                width={SIZES.md}
                height={SIZES.md}
                style={{ marginRight: SIZES.md }}
              />
            )}
            <Image source={{ uri: icon }} style={{ width: 15, height: 15 }} />
          </Info>
        </Row>
        <Address>{address}</Address>
      </InfoWrapper>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
