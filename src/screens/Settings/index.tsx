import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Subtitle, Title } from '../../components/texts';
import { HeaderScreen, ScreenContainer } from '../Home/styles';
import SelectUnit from './SelectUnit';

const SettingsScreen: React.FC = () => {

   return (
      <ScreenContainer>
         <SafeAreaView>
            <HeaderScreen>
               <View>
                  <Title>
                     Configurações
                  </Title>
                  <Subtitle>
                     Aqui você define como quer visualizar as informações no seu app.
                  </Subtitle>
               </View>
            </HeaderScreen>
            <SelectUnit />
         </SafeAreaView>
      </ScreenContainer>
   )
};

export default SettingsScreen;
