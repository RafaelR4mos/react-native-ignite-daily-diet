import {
  MealContainer,
  HourText,
  MealBadge,
  MealText,
  MealType,
  MealDate,
} from './styles';
import { TouchableOpacityProps } from 'react-native';

type MealListItemProps = TouchableOpacityProps & {
  hour: string;
  meal: string;
  type: MealType;
};

export function MealListItem({ hour, meal, type, ...rest }: MealListItemProps) {
  return (
    <MealContainer {...rest}>
      <HourText>{hour}</HourText>
      <MealText>{meal}</MealText>
      <MealBadge type={type} />
    </MealContainer>
  );
}
