import { Image, Text } from 'react-native';
import {
  Avatar,
  AvatarImg,
  BackButton,
  BackIcon,
  HeaderContainer,
  Logo,
  PageTitle,
} from './styles';

import logoImg from '../../assets/logo-img.png';
import personAvatar from '../../assets/person-avatar.png';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  variant?: 'avatar' | 'onlyBackBtn' | 'backBtnAndText';
  pageTitle?: string;
};

export function Header({
  variant = 'avatar',
  pageTitle = 'Título da página',
}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      {variant === 'backBtnAndText' && (
        <>
          <BackButton onPress={() => navigation.goBack()}>
            <BackIcon />
          </BackButton>
          <PageTitle>{pageTitle}</PageTitle>
        </>
      )}

      {variant === 'avatar' && (
        <>
          <Logo source={logoImg} />
          <Avatar>
            <AvatarImg source={personAvatar} />
          </Avatar>
        </>
      )}
    </HeaderContainer>
  );
}
