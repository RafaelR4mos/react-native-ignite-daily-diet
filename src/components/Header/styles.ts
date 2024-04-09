import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  width: 100%;
  max-height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 42px 24px;
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
