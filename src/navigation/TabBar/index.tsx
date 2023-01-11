import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Home, Setting2 } from 'iconsax-react-native';
import React from 'react';

import { TabButton, TabButtonText, TabMenuContainer } from './styles';

const MyTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
   return <TabMenuContainer>
      {state.routes.map((route, index) => {
         const { options } = descriptors[route.key];
         const label =
            options.tabBarLabel !== undefined
               ? options.tabBarLabel
               : options.title !== undefined
                  ? options.title
                  : route.name;

         const isFocused = state.index === index;

         const onPress = () => {
            const event = navigation.emit({
               type: 'tabPress',
               target: route.key,
               canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
               navigation.navigate(route.name, {});
            }
         };

         const onLongPress = () => {
            navigation.emit({
               type: 'tabLongPress',
               target: route.key,
            });
         };
         const renderIcon = () => {
            return route.name === 'Home' ?
               <Home color={isFocused ? '#b6aaff' : '#8D8D93'} variant="Bold" size={24} />
               :
               <Setting2 color={isFocused ? '#b6aaff' : '#8D8D93'} variant="Bold" size={24} />
         }



         return (
            <TabButton
               key={index}
               accessibilityRole="button"
               accessibilityState={isFocused ? { selected: true } : {}}
               accessibilityLabel={options.tabBarAccessibilityLabel}
               testID={options.tabBarTestID}
               onPress={onPress}
               onLongPress={onLongPress}
               style={{ flex: 1 }}
            >
               {renderIcon()}
               <TabButtonText style={{ color: isFocused ? '#b6aaff' : '#8D8D93' }}>
                  {label}
               </TabButtonText>
            </TabButton>
         );
      })}
   </TabMenuContainer>;
};

export default MyTabBar;
