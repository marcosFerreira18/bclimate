import { BlurView } from '@react-native-community/blur';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

export const ScreenContainer = styled.View`
   flex: 1;
   width: ${width}px;
   height: 100%;
   padding: 0px 20px;
   background-color: ${({ theme }) => theme.NEW_UI_COLORS.BACKGROUND};
`;

export const HeaderScreen = styled.View`
   flex-direction: row;
   justify-content: space-between;
`;

export const UpdateButton = styled.TouchableOpacity`
   padding: 10px;
   border-radius: 13px;
   justify-content: center;
   align-items: center;
   width: 50px;
   height: 50px;
   background-color: ${({ theme }) => theme.NEW_UI_COLORS.SUBMIT};
`;

export const BackgroundImage = styled.Image`
   position: absolute;
   width: ${width}px;
   height: 100%;
   top: 0;
   left: 0;
`;

export const TempContainer = styled.View`
   margin-top: 20px;
   flex-direction: row;
   justify-content: space-between;
`;

export const TempText = styled.Text`
   font-style: normal;
   font-weight: 800;
   font-size: 78px;
   color: ${({ theme }) => theme.NEW_UI_COLORS.TITLE};
`;

export const IconWeather = styled.Image`
   height: 120px;
   width: 120px;
`;

export const MoreInfoContainer = styled(BlurView)`
   margin-top: 20px;
   flex-direction: row;
   justify-content: space-around;
   border: 1px solid rgba(32, 84, 133, 0.2);
   border-radius: 16px;
   padding: 15px;
`;

export const MoreInfoItemContainer = styled.View`
   justify-content: space-between;
   align-items: center;
   padding: 5px;
`;

export const ItemMoreInfoIcon = styled.Text`
   font-size: 30px;
`;

export const ItemMoreInfoValue = styled.Text`
   font-style: normal;
   font-weight: 800;
   font-size: 20px;
   text-align: center;
   color: ${({ theme }) => theme.NEW_UI_COLORS.TITLE};
   margin: 10px 0px;
`;

export const ItemMoreInfoTitle = styled.Text`
   font-style: normal;
   font-weight: 600;
   font-size: 12px;
   line-height: 13px;
   text-align: center;
   color: ${({ theme }) => theme.NEW_UI_COLORS.TEXT_SECONDARY};
`;
