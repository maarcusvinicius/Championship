import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlusCircle, Basketball } from 'phosphor-react-native';
import { useTheme } from 'native-base';
import { Platform } from 'react-native';

import { New } from '../screens/New';
import { Pools } from '../screens/Pools';
import { Find } from '../screens/Find';
import { Details } from '../screens/Details';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors, sizes } = useTheme();

  const size = sizes[6]

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: colors.blue[90],
        tabBarInactiveTintColor: colors.blue[20],
        tabBarStyle: {
          position: 'absolute',
          height: sizes[22],
          borderTopWidth: 0
        },
        tabBarItemStyle: {
          position: 'relative',
          top: Platform.OS === 'android' ? -4 : 0
        }
      }}>
      <Screen
        name='new'
        component={New}
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
          tabBarLabel: ''
        }}
      />

      <Screen
        name='pools'
        component={Pools}
        options={{
          tabBarIcon: ({ color }) => <Basketball color={color} size={size} />,
          tabBarLabel: ''
        }}
      />

      <Screen
        name='find'
        component={Find}
        options={{
          tabBarButton: () => null 
        }}
      />

      <Screen
        name='details'
        component={Details}
        options={{
          tabBarButton: () => null 
        }}
      />

    </Navigator>
  )
}