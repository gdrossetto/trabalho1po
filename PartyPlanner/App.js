import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
} from 'react-native';
import {Header, Card, Button, ThemeProvider} from 'react-native-elements';
import {
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import NewEvent from './components/NewEvent';
import {Icon} from 'native-base';
import LoginScreen from './components/LoginScreen';
import NewAccount from './components/NewAccount';
import EventPage from './components/EventPage';
import SearchEvent from './components/SearchEvent';
import ProfileScreen from './components/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MenuButton() {
  return (
    <Button
      buttonStyle={{backgroundColor: 'black'}}
      icon={<Icon name="menu" style={{color: 'white'}} />}></Button>
  );
}
function ProfileButton() {
  return (
    <Button
      buttonStyle={{backgroundColor: 'black'}}
      icon={<Icon name="contact" style={{color: 'white'}} />}></Button>
  );
}

function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        tabStyle: {backgroundColor: '#1b0130'},
        labelStyle: {color: 'orange'},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="home" style={{color: 'white'}} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="calendar" style={{color: 'white'}} />,
        }}
        name="Meus Eventos"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="search" style={{color: 'white'}} />,
        }}
        name="Procurar Evento"
        component={SearchEvent}
      />
    </Tab.Navigator>
  );
}

/*function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#351d57',
      }}
      drawerContentOptions={{
        activeBackgroundColor: 'white',
        activeTintColor: '#351d57',
        inactiveTintColor: 'white',
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Adicionar Evento" component={NewEvent} />
    </Drawer.Navigator>
  );
}
*/
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="HomeScreen" component={TabNav}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Register" component={NewAccount}></Stack.Screen>
        <Stack.Screen name="Evento" component={EventPage}></Stack.Screen>
        <Stack.Screen
          name="Adicionar Evento"
          component={NewEvent}></Stack.Screen>
        <Stack.Screen name="Perfil" component={ProfileScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'black',
    flex: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
