import React from 'react';

import { Refresh2 } from 'iconsax-react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Subtitle, Title } from '../../components/texts';
import { BackgroundImage, HeaderScreen, IconWeather, ScreenContainer, TempContainer, TempText, UpdateButton } from './styles';

import bgImage from '../../assets/bg-home.png';
import ForecastHourly from './ForecastHourly';
import MoreInfo from './MoreInfo';

const HomeScreen: React.FC = () => {
   return (
      <ScreenContainer>
         <BackgroundImage style={{ resizeMode: 'cover' }} source={bgImage} />
         <SafeAreaView>
            <HeaderScreen>
               <View>
                  <Title>
                     São Paulo
                  </Title>
                  <Subtitle>
                     8 de Janeiro, Segunda
                  </Subtitle>
               </View>
               <UpdateButton>
                  <Refresh2 color={'#8D8D93'} variant="Bold" size={24} />
               </UpdateButton>
            </HeaderScreen>
            <TempContainer>
               <View>
                  <TempText>
                     18º
                  </TempText>
                  <Subtitle>
                     Temporal
                  </Subtitle>
               </View>
               <IconWeather>
                  ⛈️
               </IconWeather>
            </TempContainer>
            <MoreInfo />
            <ForecastHourly />
         </SafeAreaView>
      </ScreenContainer>
   )
};

export default HomeScreen;
