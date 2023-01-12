import React from 'react';

import { Refresh2 } from 'iconsax-react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Subtitle, Title } from '../../components/texts';
import { BackgroundImage, HeaderScreen, IconWeather, ScreenContainer, TempContainer, TempText, UpdateButton } from './styles';

import { format, fromUnixTime } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import bgImage from '../../assets/bg-home.png';
import { useWeather } from '../../hooks/weather';
import ForecastHourly from './ForecastHourly';
import MoreInfo from './MoreInfo';

const HomeScreen: React.FC = () => {

   const { location, weather, loadWeather } = useWeather()

   return weather ? (
      <ScreenContainer>
         <BackgroundImage style={{ resizeMode: 'cover' }} source={bgImage} />
         <SafeAreaView>
            <HeaderScreen>
               <View>
                  <Title>
                     {`${location && location.name}, ${location?.state}`}
                  </Title>
                  <Subtitle>
                     {weather && format(fromUnixTime(weather?.current.dt), `dd 'de' MMMM',' EEEE`, {
                        locale: ptBR,
                     })}
                  </Subtitle>
               </View>
               <UpdateButton onPress={loadWeather}>
                  <Refresh2 color={'#8D8D93'} variant="Bold" size={24} />
               </UpdateButton>
            </HeaderScreen>
            <TempContainer>
               <View>
                  <TempText>
                     {`${weather?.current.temp.toFixed(0)}º`}
                  </TempText>
                  <Subtitle>
                     {`${weather?.current.weather[0].description}`}
                  </Subtitle>
               </View>
               {weather && <IconWeather source={{ uri: `https://openweathermap.org/img/wn/${weather?.current.weather[0].icon}@2x.png` }} />}
            </TempContainer>
            <MoreInfo />
            <ForecastHourly />
         </SafeAreaView>
      </ScreenContainer>
   ) : <EmptyScreen />
};

const EmptyScreen: React.FC = () => {
   const { loadWeather, location, loading } = useWeather()

   return (

      <ScreenContainer>
         <BackgroundImage style={{ resizeMode: 'cover' }} source={bgImage} />
         <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            {loading &&
               <Title style={{ textAlign: "center" }}>
                  {`Carregando os dados meteorológicos`}
               </Title>}
            {!loading && <>
               <Title style={{ textAlign: "center" }}>
                  {`Não foi possível carregar os dados meteorológicos.`}
               </Title>
               <UpdateButton onPress={loadWeather} style={{ width: 200 }}>
                  <Subtitle>
                     {`Tentar novamente`}
                  </Subtitle>
               </UpdateButton>
            </>}
         </SafeAreaView>
      </ScreenContainer>
   )

}

export default HomeScreen;
