import styled from 'styled-components/native';

export const ForecastHourlyContainer = styled.View`
   margin-top: 15px;
   padding: 10px 0px;
`;

export const ForecastHourlyButtonsContainer = styled.ScrollView`
   flex-direction: row;
`;

export const ButtonContainer = styled.TouchableOpacity`
   /* justify-content: center; */
   align-items: center;
   margin-right: 10px;
`;

export const ButtonText = styled.Text`
   font-size: 18px;
   color: white;
   font-weight: 800;
   text-transform: capitalize;
`;

export const ButtonIndicator = styled.View`
   width: 10px;
   height: 3px;
   background-color: #fff;
   border-radius: 5px;
   margin-top: 5px;
`;

export const ItemTempContainer = styled.View`
   height: 135px;
   width: 100px;
   justify-content: space-evenly;
   align-items: center;
   padding: 10px;
   border-radius: 15px;
   background-color: ${({ theme }) => theme.NEW_UI_COLORS.SUBMIT};
`;

export const TextTime = styled.Text`
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   color: #888ca0;
`;

export const Icon = styled.Image`
   height: 50px;
   width: 50px;
`;

export const TextTemp = styled.Text`
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   color: #fff;
`;
