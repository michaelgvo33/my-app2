
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Product from '../screens/Product';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Bottom = createBottomTabNavigator();

export function BottomRoutes() {
  return (
    <Bottom.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: {
         height: 80,
        paddingBottom: 10,
        paddingTop: 5,
            },
        tabBarLabelStyle: {
        fontSize: 11,
            },
        headerShown: false,
        tabBarActiveTintColor: '#7C3AED',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Bottom.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: 'Produtos',
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: 'red',
            color: 'white',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="shopping-cart"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
