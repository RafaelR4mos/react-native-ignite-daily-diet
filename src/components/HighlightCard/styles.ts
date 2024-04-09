import styled from 'styled-components/native';
import { HighlightText, NormalText } from '../shared/CommonStyles';
import { ArrowUpRight } from 'phosphor-react-native';

export type HighlightCardVariant = 'green' | 'red';

type HighlightCardStylesType = {
  variant: HighlightCardVariant;
};

export const Container = styled.TouchableOpacity<HighlightCardStylesType>`
  width: 100%;
  max-height: 110px;
  min-height: 110px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};

  padding: 32px 16px 32px;
  position: relative;
`;

export const Title = styled(HighlightText)`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const Subtitle = styled(NormalText)`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm}px;
`;

export const CardBtnContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 12px;
  top: 12px;
`;

type HighlightCardIcon = {
  variant: HighlightCardVariant;
};

export const CardBtnIcon = styled(ArrowUpRight).attrs<HighlightCardIcon>(
  ({ theme, variant }) => ({
    color:
      variant === 'green' ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED,
    size: theme.FONT_SIZE.XL,
    weight: 'bold',
  })
)``;
