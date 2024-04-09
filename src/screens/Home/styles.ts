import styled from 'styled-components/native';
import { NormalText } from '../../components/shared/CommonStyles';

export const RefeicoesTitle = styled(NormalText)`
  margin-top: 32px;
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
