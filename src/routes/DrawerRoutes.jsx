
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Product from '../screens/Product';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#7C3AED',
        drawerActiveBackgroundColor: '#EDE9FE',
      }}
    >
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          title: 'Início',
          drawerLabel: 'Início',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="product"
        component={Product}
        options={{
          title: 'Produtos',
          drawerLabel: 'Produtos',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name="shopping-cart"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Perfil',
          drawerLabel: 'Perfil',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name="person"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="settings"
        component={Settings}
        options={{
          title: 'Configurações',
          drawerLabel: 'Configurações',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name="settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
