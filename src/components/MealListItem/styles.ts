import styled from 'styled-components/native';
import { HighlightText, NormalText } from '../shared/CommonStyles';

export const MealContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;

  min-height: 50px;

  padding: 12px;
  border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_400}`};
  border-radius: 6px;
`;

export const HourText = styled(HighlightText)`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs}px;
  padding: 1px 12px 1px 0;

  border-color: ${({ theme }) => theme.COLORS.GRAY_400};

  border-right-width: 1px;
`;

export const MealText = styled(NormalText)`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export type MealType = 'in' | 'out';
export const MealBadge = styled.View<{ type: MealType }>`
  min-width: 14px;
  max-width: 14px;

  min-height: 14px;
  max-height: 14px;

  border-radius: 14px;

  background-color: ${({ theme, type }) =>
    type === 'in' ? theme.COLORS.MID_GREEN : theme.COLORS.MID_RED};
`;

export const MealDate = styled(HighlightText)`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
