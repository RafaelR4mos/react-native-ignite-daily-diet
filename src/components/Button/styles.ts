import styled from 'styled-components/native';
import { HighlightText } from '../shared/CommonStyles';
import { MaterialIcons } from '@expo/vector-icons';

type ButtonType = 'primary' | 'outlined';

type ButtonStyleProps = {
  type: ButtonType;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 8px;

  width: 100%;

  max-height: 50px;
  min-height: 50px;

  border-radius: 6px;
  padding: 0 24px;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.GRAY_600 : 'transparent'};
  border: ${({ theme, type }) =>
    `1px solid ${type === 'primary' ? 'transparent' : theme.COLORS.GRAY_600}`};
`;

export const BtnText = styled(HighlightText)<{ type: ButtonType }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
`;

export const Icon = styled(MaterialIcons).attrs<{ type: ButtonType }>(
  ({ theme, type }) => ({
    size: theme.FONT_SIZE.XL,
    color: type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_600,
  })
)``;
