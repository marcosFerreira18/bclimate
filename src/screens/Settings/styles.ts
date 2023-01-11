import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen');

export const UnitsContainer = styled.View`
   margin-top: 30px;
`;

export const UnitsButtonContainer = styled.View`
   margin-top: 10px;
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
`;

export const UnitsItem = styled.TouchableOpacity`
   width: ${width * 0.27}px;
   height: ${width * 0.27}px;
   border-radius: 23px;
   background-color: ${({ theme }) => theme.NEW_UI_COLORS.SUBMIT};
   justify-content: center
`;

export const SectionTitle = styled.Text`
   font-style: normal;
   font-weight: 800;
   font-size: 14px;
   color: ${({ theme }) => theme.NEW_UI_COLORS.TITLE};
`;

export const ItemUnitTitle = styled.Text`
   font-style: normal;
   font-weight: 600;
   font-size: 12px;
   line-height: 13px;
   text-align: center;
   color: ${({ theme }) => theme.NEW_UI_COLORS.TEXT_SECONDARY};
`;

export const ItemUnitSymbol = styled.Text`
   font-style: normal;
   font-weight: 800;
   font-size: 44px;
   text-align: center;
   color: ${({ theme }) => theme.NEW_UI_COLORS.TITLE};
`;