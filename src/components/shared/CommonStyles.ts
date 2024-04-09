import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const HighlightText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const NormalText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
