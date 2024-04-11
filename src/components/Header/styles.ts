import styled from 'styled-components/native';
import { HighlightText } from '../shared/CommonStyles';
import { CaretLeft } from 'phosphor-react-native';

export const HeaderContainer = styled.View`
  width: 100%;
  min-height: 40px;
  max-height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  padding: 4px 24px;
`;

export const Logo = styled.Image`
  max-width: 82px;
  min-width: 82px;

  max-height: 37px;
  min-height: 37px;
`;

export const Avatar = styled.View`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 43px;
  min-width: 43px;

  max-height: 43px;
  min-height: 43px;

  border-radius: 40px;

  border: ${({ theme }) => `2px solid ${theme.COLORS.GRAY_700}`};
`;

export const AvatarImg = styled.Image`
  max-width: 40px;
  min-width: 40px;

  max-height: 40px;
  min-height: 40px;

  border-radius: 40px;

  object-fit: cover;
`;

export const BackButton = styled.TouchableOpacity`
  max-width: 40px;
  min-width: 40px;
`;

export const PageTitle = styled(HighlightText)`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  margin: 0 auto;
  padding-right: 40px; /*size of the button to properly center the text*/
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_700,
  size: theme.FONT_SIZE.XL,
}))``;
