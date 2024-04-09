import { Image } from 'react-native';
import { Avatar, AvatarImg, HeaderContainer, Logo } from './styles';

import logoImg from '../../assets/logo-img.png';
import personAvatar from '../../assets/person-avatar.png';

type HeaderProps = {
  variant?: 'avatar' | 'onlyBackBtn' | 'backBtnAndText';
};

export function Header({ variant = 'avatar' }: HeaderProps) {
  return (
    <HeaderContainer>
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
