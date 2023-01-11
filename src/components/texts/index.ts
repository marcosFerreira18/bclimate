import styled from 'styled-components/native';

export const Title = styled.Text`
   /* font-family: 'Inter'; */
   font-style: normal;
   font-weight: 900;
   font-size: 22px;
   line-height: 27px;
   color: ${({ theme }) => theme.NEW_UI_COLORS.TITLE};
   margin-top: 10px;
`;

export const Subtitle = styled.Text`
   /* font-family: 'Inter'; */
   font-style: normal;
   font-weight: 600;
   font-size: 15px;
   line-height: 18px;
   color: ${({ theme }) => theme.NEW_UI_COLORS.TEXT_SECONDARY};
   margin-top: 10px;
`;
