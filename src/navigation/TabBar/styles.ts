import styled from 'styled-components/native';

export const TabMenuContainer = styled.View`
   width: 100%;
   height: 80px;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 10px 20px;
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   background-color: ${({ theme }) => theme.NEW_UI_COLORS.BACKGROUND};
`;

export const TabButton = styled.TouchableOpacity`
   align-items: center;
   justify-content: center;
   height: 100%;
`;

export const TabButtonText = styled.Text`
   /* font-family: 'Inter'; */
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   color: #b6aaff;
   margin-top: 10px ;
`;
