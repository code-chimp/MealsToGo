export default interface IRestaurant {
  name?: string;
  icon?: string;
  photos?: Array<string>;
  address?: string;
  hours?: string;
  rating?: number;
  isClosedTemporarily?: boolean;
}
