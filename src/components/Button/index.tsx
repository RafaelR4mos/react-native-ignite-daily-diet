import { BtnText, ButtonContainer, Icon } from './styles';
import { TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: 'primary' | 'outlined';
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export function Button({
  title,
  type = 'primary',
  icon,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      type={type}
      {...rest}
    >
      {icon && (
        <Icon
          name={icon}
          type={type}
        />
      )}
      <BtnText type={type}>{title}</BtnText>
    </ButtonContainer>
  );
}
