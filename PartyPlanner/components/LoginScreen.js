import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  ShadowPropTypesIOS,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Form,
  Label,
  Item,
  Input,
} from 'native-base';

import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';


const LoginScreen = ({navigation}) => {


  return (
    <ScrollView style={{flex: 1, backgroundColor: '#351d57'}}>
      <Header style={{backgroundColor: '#1b0130'}}>
        <Title style={{color: 'orange', paddingTop: 15}}>Login</Title>
      </Header>
      <ScrollView style={{flex: 1, backgroundColor: '#351d57'}}>
        <Form>
          <Item stackedLabel style={{borderRadius:10}}>
            <Label style={{color: 'orange'}}>E-Mail</Label>
            <Input style={{color: 'white',borderRadius:10}} />
          </Item>
          <Item stackedLabel style={{borderRadius:10,}}>
            <Label style={{color: 'orange'}}>Senha</Label>
            <Input secureTextEntry={true} style={{borderRadius:10,color: 'white'}} />
          </Item>
        </Form>
        <TouchableOpacity
          style={{
            borderRadius:10,
            backgroundColor: 'orange',
            justifyContent: 'center',
            marginTop: 30,
            marginLeft: 20,
            marginRight: 20,
            height: 60,
          }}
          onPress={() => {
            navigation.reset({
              routes: [{ name: 'HomeScreen' }]
            });
          }}>
          <Text style={{color: '#351d57', fontSize: 22, textAlign: 'center'}}>
            Entrar
          </Text>
        </TouchableOpacity>
        <Text
          style={{textAlign: 'center', paddingTop: 40, color: 'orange',fontSize:16}}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          Não tem conta? <Text style={{fontWeight:'bold'}}>Aperte aqui!</Text>
        </Text>
      </ScrollView>
    </ScrollView>
  );
};
export default LoginScreen;
